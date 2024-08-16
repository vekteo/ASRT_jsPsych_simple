# ASRT_jsPsych_simple

<h2>Citation</h2>
If you use the script, please include this citation in your manuscript:

Vékony, T. (2021). Alternating Serial Reaction Time Task created with jsPsych (Version 1.0.0) [Computer software]. https://doi.org/10.5281/zenodo.7124730
<a href="https://zenodo.org/badge/latestdoi/258316160"><img src="https://zenodo.org/badge/258316160.svg" alt="DOI"></a>

<h2>About the task</h2>

In this task, four circles are displayed horizontally on the screen. A target stimulus, represented by an image of a dog's head, will appear in one of the circles. The user’s objective is to press the corresponding response key (either 's', 'f', 'j', or 'l') as quickly and accurately as possible based on the target’s position.

The task begins with a practice block consisting of 80 trials presented in random order. Following this, the main task consists of 20 blocks of the Alternating Serial Reaction Time (ASRT) paradigm. Each block includes 10 repetitions of a randomly chosen 8-element sequence.

The trials involve different images of dogs, with the keys 's', 'f', 'j', and 'l' on the keyboard mapped to the four positions from left to right.

If the user provides a correct response, the next stimulus appears after a 120 ms response-to-stimulus interval. If an incorrect response is given (but a valid response key is pressed), the same target stimulus reappears immediately with no delay (0 ms interstimulus interval).

At the end of each block, feedback is provided based on the user’s performance. This feedback includes average accuracy and response time (RT):

<li>If the mean accuracy is below 90%, the user is prompted to focus on accuracy.</li>
<li>If the mean response time exceeds 350 ms, the user is encouraged to respond faster.</li>
<li>If both criteria are met, the user is advised to continue as before.</li>
  
Breaks between blocks are self-paced, and the user can resume the task by pressing any response key.

Upon completing the task, output data is automatically downloaded in CSV format. If the user quits before completing the task, the data up to that point is still downloaded to the local machine.

<h2>Output variables</h2>
<ul>
<li><strong>success:</strong> whether fullscreen mode was successfully started/ended (true or false)</li>
<li><strong>trial_type:</strong> jsPsych trialtype of the given trial (fullscreen, instructions, html-keyboard-response or serial-reaction-time)</li>
<li><strong>trial_index:</strong> the number of the given trials (all events considered, even instructions, feedback!)</li>
<li><strong>time_elapsed:</strong> the time elapsed from the start of the script in ms</li>
<li><strong>internal_code_id:</strong> internal node id of the trial</li>
<li><strong>interaction:</strong> if browser interaction occured (e.g., change of focus, exit from fullscreen mode)</li>
<li><strong>view_history:</strong> only relevant in the instructions; the actions and the corresponding RTs during the reading of the instructions</li>
<li><strong>rt:</strong> reaction time (RT) in ms - in the case of first responses to the trial, it shows the rt calculated from the appearance of the stimulus; in the case of not first responses, it shows the rt calculated from the last keypress</li>
<li><strong>stimulus:</strong> stimulus on the screen; relevant only if instructions/feedback are present</li>
<li><strong>button_press:</strong> code if button was pressed</li>
<li><strong>key_press:</strong> number code of the key pressed</li>
<li><strong>correct:</strong> whether the response was correct (true or false)</li>
<li><strong>grid:</strong> layout of the positions (in a grid)</li>
<li><strong>target:</strong> position of the target stimulus (the 4 positions: 1: 0,0; 2: 0,1; 3: 0,2; 4: 0,3)</li>
<li><strong>asrt_trial:</strong>if the trial was an ASRT trial, 1, otherwise 0</li>
<li><strong>sequence:</strong> the sequence used during the task (assigned randomly at the beginning)</li>
<li><strong>correct_response:</strong> the correct response position in the given trial</li>
<li><strong>triplet_type:</strong> the type of the triplet (high-probability triplet: H; low-probability triplet: L, first trials: X, trill: T, repetition: T)</li>
<li><strong>trial_number:</strong> number of the trial within the block</li>
<li><strong>block_number:</strong> number of the block </li>
<li><strong>is_first_response:</strong> if the answer is the first answer to the given trial (yes: 1; no: 0)</li>
<li><strong>is_practice:</strong> whether it was a practice trial (yes: 1; 0: no)</li>
<li><strong>correct_key:</strong> the response key that should be pressed to respond correctly ('s', 'f', 'j' or 'l')</li>
<li><strong>accuracy:</strong> accuracy coded numerically (correct: 1, false: 0)</li>
<li><strong>cumulative_RT:</strong> the RT from the beginning of the first appeareance of the trial in ms</li>
<li><strong>actual_triplet:</strong> the triplet to what response was given (three digits indicating the positions of the target stimulus in the last three trials)</li>
<li><strong>r_or_p:</strong> random or pattern stimulus (R or P)</li>

<h2>Settings</h2>
In the <i>parameters.js</i> file, several parameters can be modified by the user:
<li><strong>nrRandomBlocks:</strong> the number of practice blocks at the beginning</li>
<li><strong>nrBlocks:</strong> the number of learning blocks (besides the practice blocks)</li>
<li><strong>nrTrials:</strong> the number of trials in the sequence</li>
<li><strong>isWarningOn:</strong> a warning can be shown to the participants if their performance drops below 80% throughout the whole task (true/false)</li>
<li><strong>responseKeys:</strong> the response keys in an array</li>
<li><strong>rsi:</strong> the response-to-stimulus interval after a button press (in ms)</li>
<li><strong>initialDelay:</strong> the delay before the first trial of a block (in ms) </li>
<li><strong>feedbackDuration:</strong> duration of the feedback at the end of the block (in ms)</li>
<li><strong>targetImage:</strong> the image used for ASRT trials</li>
<li><strong>image:</strong> all images in an array which are to be preloaded</li>

<h2>How to start the task</h2>
Open the <i>index.html</i> file in the <i>main</i> folder.

<h2>Browser requirements</h2>
<p>Any browser except Safari and Internet Explorer. Recommended: Chrome.</p>
