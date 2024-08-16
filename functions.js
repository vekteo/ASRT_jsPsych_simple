 // **************** FUNCTIONS ****************

// create a sequence by shuffeling the default pattern array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// create random sequence
function createRandomSequence(n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(1, 2, 3, 4);
  }
    for (let i = sequence.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
  }
    return sequence;
}

// create ASRT elements
function createStimulusArray(num_trials) {
  for (var i = 0; i < num_trials; i++) {
        if (i % 2 === 1) {
            stimulus_array.push(pattern[Math.floor(i / 2) % pattern.length]);
        } else {
            stimulus_array.push(Math.floor(Math.random() * 4) + 1);
        }
    } 
}

// create triplet type array
function createProbabilityArray(trials, pattern) {
    const probabilities = [];
    for (let i = 0; i < trials.length; i++) {
      if (i < 2) {
        probabilities.push("X");
      } else if (trials[i - 2] === trials[i] && trials[i - 1] === trials[i]) {
        probabilities.push("R");
      } else if (trials[i - 2] === trials[i]) {
        probabilities.push("T");
      } else if (
        pattern.includes(trials[i - 2]) && 
        pattern.includes(trials[i]) && 
        (Math.abs(pattern.indexOf(trials[i - 2]) - pattern.indexOf(trials[i])) === 1 ||
        (pattern.indexOf(trials[i - 2]) === 0 && pattern.indexOf(trials[i]) === pattern.length - 1) ||
        (pattern.indexOf(trials[i - 2]) === pattern.length - 1 && pattern.indexOf(trials[i]) === 0))
  ) {
    probabilities.push("H");
      } else {
        probabilities.push("L");
      }
    }
  return probabilities;
}


// update trial data
function dataUpdate() {
    presentTrial = jsPsych.data.get().last(1).values()[0]
    previousTrial = jsPsych.data.get().last(2).values()[0]

    if (presentTrial.correct_response == 1) {
      presentTrial.correct_key = 's';
    } else if (presentTrial.correct_response == 2) {
      presentTrial.correct_key = 'f';
    } else if (presentTrial.correct_response == 3) {
      presentTrial.correct_key = 'j';
    } else if (presentTrial.correct_response == 4) {
      presentTrial.correct_key = 'l';
    }

    // calculate the response key
    if (presentTrial.key_press == 83) {
      presentTrial.response_key = 's';
    } else if (presentTrial.key_press == 70) {
      presentTrial.response_key = 'f';
    } else if (presentTrial.key_press == 74) {
      presentTrial.response_key = 'j';
    } else if (presentTrial.key_press == 76) {
      presentTrial.response_key = 'l';
    }

    // calculate cumulative reaction time
    if (presentTrial.asrt_trial == 1){
      if (presentTrial.trial_number == previousTrial.trial_number){
        presentTrial.cumulative_RT = presentTrial.rt + previousTrial.cumulative_RT
      }
      else {
        presentTrial.cumulative_RT = presentTrial.rt
      }
    }

    // calculate actual triplet
    if (presentTrial.asrt_trial == 1) {
      if (presentTrial.trial_number == 1) {
        presentTrial.actual_triplet = presentTrial.correct_response
      } else if (presentTrial.trial_number == previousTrial.trial_number) {
        presentTrial.actual_triplet = previousTrial.actual_triplet;
      } else if (presentTrial.trial_number == 2) {
        presentTrial.actual_triplet = String(previousTrial.actual_triplet) + String(presentTrial.correct_response);
      } else if (presentTrial.trial_number == 3) {
        presentTrial.actual_triplet = String(previousTrial.actual_triplet[0]) + String(previousTrial.actual_triplet[1]) + String(presentTrial.correct_response);
      } else if (presentTrial.trial_number > 3) {
        presentTrial.actual_triplet = String(previousTrial.actual_triplet[1]) + String(previousTrial.actual_triplet[2]) + String(presentTrial.correct_response);
      }
    }

    // calculate if it is a pattern or random trial
    if (presentTrial.asrt_trial == 1) {
      if (presentTrial.trial_number % 2 == 0 && presentTrial.is_practice == 0) {
        presentTrial.p_or_r = "P";
      } else {
        presentTrial.p_or_r = "R";
      }
    }
}