
// move to main function
function timeline() {
    let goIns = async function () {
        studySessionData.doneInstructions = "stratIns";
        platform.saveSession(studySessionData, true);
        let doneInstructions = await startFirstDay();
        if (doneInstructions == "doneInstructions") {
            let updatedDates = updateDates();
            studySessionData.doneInstructions = "doneInstructions";
            studySessionData.expDaysDate = updatedDates.fullDate;
            studySessionData.startDate = startDate;
            platform.saveSession(studySessionData, true);
            platform.goToUrl("instructions/questions/Multiple-Choice-Quiz-JavaScript-master/index.html");
        }
    }
    goIns();
}


