# ASRT_jsPsych_simple

This repository contains a streamlined implementation of the **Alternating Serial Reaction Time (ASRT)** task using the **jsPsych** library.

---

## 📜 Citation

If you utilize this script in your research, please include the following citation in your manuscript:

> Vékony, T. (2021). Alternating Serial Reaction Time Task created with jsPsych (Version 1.0.0) [Computer software]. https://doi.org/10.5281/zenodo.7124730

---

## 🧠 About the Task

In this task, four circles are displayed horizontally on the screen. A target stimulus, represented by an image of a dog's head, appears in one of the circles. The user’s objective is to press the corresponding response key as quickly and accurately as possible based on the target’s position.



### Task Procedure
* **Practice Phase**: Begins with two practice blocks consisting of 80 trials presented in random order.
* **Main Task**: Consists of 30 blocks of the ASRT paradigm. Each block includes 10 repetitions of a randomly chosen 8-element sequence.
* **Controls**: The keys **'s'**, **'f'**, **'j'**, and **'l'** are mapped to the four positions from left to right.
* **Trial Logic**:
    * **Correct Response**: The next stimulus appears after a 120 ms response-to-stimulus interval.
    * **Incorrect Response**: The same target stimulus reappears immediately with no delay (0 ms interstimulus interval).
* **Feedback & Breaks**:
    * Performance feedback (average accuracy and RT) is shown after each block.
    * Users are prompted to focus on accuracy if mean accuracy is **< 90%**.
    * Users are encouraged to respond faster if mean RT exceeds **350 ms**.
    * Breaks between blocks are self-paced, and the task resumes upon pressing any response key.

---

## 📊 Output Variables

Data is automatically downloaded in **CSV format** upon completion or if the user exits early. Key variables include:

| Variable | Description |
| :--- | :--- |
| `subject` | Unique 15-character random ID or customized subject number. |
| `rt` | Reaction time in ms (from stimulus appearance for first responses; from last keypress for subsequent responses). |
| `cumulative_RT` | The RT from the beginning of the first appearance of the trial in ms. |
| `correct` | Whether the response was correct (`true`/`false`). |
| `r_or_p` | Indicates if the stimulus was Random (**R**) or Pattern (**P**). |
| `triplet_type` | Categorizes the triplet (e.g., **H** for high-probability, **L** for low-probability, **X** for first trials). |
| `actual_triplet` | Three digits indicating the positions of the target stimulus in the last three trials. |
| `block_number` | Number of the block (1–30). |
| `is_practice` | Whether the trial belonged to a practice block (`1` = yes, `0` = no). |

---

## ⚙️ Settings

Users can modify experimental parameters within the `parameters.js` file:

* **nrRandomBlocks**: Number of initial practice blocks.
* **nrBlocks**: Number of ASRT learning blocks.
* **rsi**: The response-to-stimulus interval in milliseconds.
* **isWarningOn**: Toggles a warning if overall performance drops below 80%.
* **targetImage**: Specify the image used for the ASRT trials.

---

## 🚀 Getting Started

### Running the Task
* Open the `index.html` file.
* **Recommended Browser**: Google Chrome.
* **Incompatible Browsers**: Safari and Internet Explorer.
