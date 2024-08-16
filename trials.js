  function createTrials(){
    
    // **************** DEFINE TRIALS FOR INSTRUCTIONS ****************

    const instruction = {
        type: "instructions",
        pages: [
            `<p>Ebben a feladatban négy kört fogsz látni a képernyő közepén. Balról jobbra az <strong>'S'</strong>, <strong>'F'</strong>, <strong>'J'</strong> és <strong>'L'</strong> billentyűk tartoznak a négy körhöz.</p>
            <p>Időről időre egy <b>kutyafej</b> fog megjelenni valamelyik körben.</p>
            <p>A feladatod az lesz, hogy 'elkapd a kutyát' a <strong style="color:green">kutyafej</strong> megjelenési helyéhez tartozó gomb <strong style="color:green">minél pontosabb és minél gyorsabb lenyomásával</strong>.</p>
            <div class='float: center;'><img src='static/images/ASRT_HU.gif' width='375px' alt='Dalmata'/></div>
            <p>A feladat során néhány percenként lesz egy rövid szünet, amikor megmutatjuk számodra az átlagos pontosságod és reakcióidődet, amit felhasználhatsz a tejesítményed javításához.`,
            `<p>Az <strong>'S'</strong> billentyűt a bal kezed középsőujjával,</p>
            <p>az <strong>'F'</strong> billentyűt a bal kezed mutatóujjával,</strong></p>
            <p>a <strong>'J'</strong> billentyűt a jobb kezed mutatóujjával,</p>
            <p>az <strong>'L'</strong> billentyűt pedig a jobb kezed középsőujjával </strong>kell lenyomni.</p>
            <div class='float: center;'><img src="static/images/keyboard.bmp" height='10%' alt='Hand'/></div>`,
        ],
        show_clickable_nav: true,
        button_label_next: "Tovább",
        button_label_previous: "Vissza"
    }

    // block start
    const blockStart = {
        type: "html-keyboard-response",
        stimulus: `
        <h2>A következő blokk hamarosan indul.</h2>
        <p>Kérlek, helyezd az ujjaidat az alábbi pozícióba a billentyűzeteden:</p>
        <img src="static/images/keyboard.bmp", height='10%'>
        <p><strong>Nyomd meg bármelyik gombot a blokk indításához!</strong></p>`
    };

    // practice start
    const practiceStart = {
        type: "html-keyboard-response",
        stimulus: 
            `<h2>Most egy rövid gyakorlás következik.</h2>
            <p>Helyezd az ujjaidat az alábbi pozícióba a billentyűzeteden:</p>
            <img src="static/images/keyboard.bmp" height='10%'>
            <p><strong>Ha készenállsz, nyomd meg <strong>bármelyik</strong> gombot a rövid gyakorlás megkezdéséhez!</strong></p>`
    };

    // real start
    const realStart = {
        type: "html-keyboard-response",
        stimulus: 
            `<h2>A feladat most kezdődik élesben.</h2>
            <p>Helyezd az ujjaidat az alábbi pozícióba a billentyűzeteden:</p>
            <img src="static/images/keyboard.bmp" height='10%'>
            <p>Ha készen állsz, nyomd meg <strong>bármelyik</strong> gombot a kezdéshez!</p>`
    };

    // end of task
    const end = {
        type: "html-keyboard-response",
        stimulus: `<h2>Vége a feladatnak.</p><p>Köszönjük!</h2>`
    };

    // warning
    const warningStimulus = {
        type: "html-keyboard-response",
        response_ends_trial: true,
        data: {is_warning: "warning"},
        stimulus: function () {
            let trials = jsPsych.data.get().filter({asrt_trial: 1});
            let correctTrials = trials.filter({accuracy: 1, is_first_response: 1});
            let numberOfTrials = trials.filter({is_first_response: 1}).count();
            let allAccuracy = Math.round(correctTrials.count() / numberOfTrials * 100);
            return `<h2 class="warning">FIGYELEM!</h2>
                <p>Az eddigi pontosságod a feladat egésze alatt: </p><p style="color:red; font-size:50px">${allAccuracy}%</p>
                <p><strong>Csak akkor tudjuk elfogadni a kitöltésed, ha a feladat végére 80% felett lesz a pontosságod!</strong></p>
                <p><strong>Kérlek, próbálj pontosabb lenni!</strong></p><br>
                <p>Nyomj meg egy gombot a folytatáshoz!</p>`
        },
        };
    
    const warning = {
        timeline: [warningStimulus],
        timeline_variables: warningStimulus.data,
        conditional_function: function() {
            let trial = jsPsych.data.get().filter({asrt_trial: 1, is_practice: 0});
            let correctTrials = trial.filter({correct: true, is_first_response: 1, is_practice: 0});
            let numberOfTrials = trial.filter({is_first_response: 1, is_practice: 0}).count();
            let allAccuracy = Math.round(correctTrials.count() / numberOfTrials * 100);
            return allAccuracy < 80;
        }
    };
        
    // **************** DEFINE TRIALS FOR ASRT ****************
    
    // ASRT trial
    let trial = {
        type: 'serial-reaction-time',
        grid: [[1, 1, 1, 1]],
        choices: [parameters.responseKeys],
        target: [0, 0],
        response_ends_trial: true,
        pre_target_duration: parameters.rsi, 
        target_color: parameters.targetImage,
        data: {asrt_trial: 1, subject: subject_id},
    };

    let trialRepeat = {... trial, pre_target_duration: 0};

    // feedback trial
    const feedback = {
        type: "html-keyboard-response",
        trial_duration: parameters.feedbackDuration,
        response_ends_trial: false,
        stimulus: function () {
            let trials = jsPsych.data.get();
            let blockNum = jsPsych.data.get().last(2).values()[0].block_number;
            if (jsPsych.data.get().last(2).values()[0].is_practice == 1) {
            correct_trials = trials.filter({correct: true, block_number: blockNum, is_first_response: 1, is_practice: 1});
            numberOfTrials = trials.filter({block_number: blockNum, is_first_response: 1, is_practice: 1}).count();
            } 
            else {
            correct_trials = trials.filter({correct: true, block_number: blockNum, is_first_response: 1, is_practice: 0});
            numberOfTrials = trials.filter({block_number: blockNum, is_first_response: 1, is_practice: 0}).count();
            }
            let accuracy = Math.round(correct_trials.count() / numberOfTrials * 100);
            let rt = Math.round(correct_trials.select('rt').mean());
            let message;
            if (blockNum == parameters.nrblocks) {
                message = ""
            } else if (accuracy < 90) {
                message = `<p class='message'><strong>Csak így tovább! Kérlek, próbálj meg 90% feletti pontosságot tartani!</strong></p>`
            } else if (rt > 350) {
                message = `<p class='message'><strong>Csak így tovább! Kérlek, próbálj meg 350 ms alatti gyorsaságot tartani!</strong></p>`
            } else {
                message = `<p class='message'><strong>Szép munka! Csak így tovább!</strong></p>`
            }
            return `<h2>Vége a(z) ${blockNum}. blokknak.</h2><br><h4>Az átlagos pontosságod: ${accuracy}%</h4><h4>Az átlagos reakcióidőd: ${rt} ms</h4><br>${message}`
        }
    }

    // return the variables defined above
    return {
        instruction,
        blockStart,
        practiceStart,
        realStart,
        end,
        warning,
        trial,
        trialRepeat,
        feedback
    }
}