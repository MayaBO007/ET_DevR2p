
// ****************************************************************************************
//  Listen to Orientation changes and handle them accordingly
// ----------------------------------------------------------------------------------------
// initialize variables:
var screenOrientationEvents = [];

if (window.matchMedia("(orientation: landscape)").matches) {
    removeOnlyLandscapeMessage()
} else {
    showOnlyLandscapeMessage()
}
window.addEventListener("orientationchange", function (event) {
    // if ortation is changed from the main landscape mode
    if (window.orientation == 0) { // originally I used this: event.target.screen.orientation.angle - but this does not work on iphones
        showOnlyLandscapeMessage()
    } else { // device rotated back to the main landscape mode
        removeOnlyLandscapeMessage()
    }
    // record data:
    screenOrientationEvents.push({
        orientationAngle: window.orientation,
        orientationTime: new Date(),
        OrientationTimeStamp: event.timeStamp,
    });
});

function showOnlyLandscapeMessage() {
    // check if instructions are done and show message
    if (!studySessionData.doneInstructions == "doneInstructions") {
        return
    } else {
        document.getElementById("horizontal").style.display = "inline"; // The commented parts around were relevant when instructions where not in an iframe
    }
}

function removeOnlyLandscapeMessage() {
    // check if instructions are done and show message
    if (!studySessionData.doneInstructions == "doneInstructions") {
        return
    } else {
        document.getElementById("horizontal").style.display = "none";
    }
}