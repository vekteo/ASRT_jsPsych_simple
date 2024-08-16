// **************** PARAMETERS TO SET ****************

function setParameters() {
    let nrRandomBlocks = 1;
    let nrBlocks = 30;
    let nrTrials = 80;
    let isWarningOn = true;
    let responseKeys = ['s', 'f', 'j', 'l']
    let rsi = 120;
    let initialDelay = 1000;
    let feedbackDuration = 5000;
    let targetImage = "url(static/images/dogface.jpg)";
    let images = ["static/images/dogface.jpg"];

    return {
        nrRandomBlocks,
        nrBlocks,
        nrTrials,
        isWarningOn,
        responseKeys,
        rsi,
        initialDelay,
        feedbackDuration,
        targetImage,
        images
    }
}
