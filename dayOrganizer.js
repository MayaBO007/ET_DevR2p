function moveToDay() {
    platform.getAllSessions().then((data) => {
        getIndexSessionData(data).then((indexI) => {
            studySessionData = data[indexI];
            let updatedDates = updateDates();
            let todayDate = getTodayDate().slice(0, 2);

            const moveToAppButton = document.getElementById("moveToAppButton");
            const loading = document.getElementById("loading");
            const endOfGame = document.getElementById("endOfGame");
            const endOfGame_hor = document.getElementById("endOfGame_hor");
            const problem = document.getElementById("problem");
            const problem_hor = document.getElementById("problem_hor");

            if (todayDate == "13") {
                platform.goToUrl("days/twoTests/twoTests.html");
            } else if (typeof studySessionData === "undefined" || studySessionData.doneInstructions === "") {
                platform.goToUrl("instructions/instructions.html");
                studySessionData.doneInstructions = "stratIns";
            } else if (studySessionData.doneInstructions === "doneInstructions") {
                if (
                    studySessionData.isDayDone === "done" &&
                    studySessionData.doneTest1 !== "doneTest1" ||
                    Number(todayDate) === Number(dayDate())) {
                    platform.goToUrl("days/training/training.html");
                } else if (
                    studySessionData.isDayDone !== "done" &&
                    updatedDates.fullDate.getDate() !== Number(dayDate())
                ) {
                    if (window.matchMedia("(orientation: landscape)").matches) {
                        problem.style.display = "inline";
                    } else {
                        problem_hor.style.display = "inline";
                    }
                } else if ((studySessionData.doneTest1 === "doneTest1") && (studySessionData.doneTest2 != "doneTest2")) {
                    platform.goToUrl("days/devTest/devTest.html");
                } else if (studySessionData.doneTest2 === "doneTest2") {
                    moveToAppButton.style.display = "none";
                    loading.style.display = "none";
                    endOfGame.style.display = "inline";
                }
            } else {
                moveToAppButton.style.display = "none";
                loading.style.display = "none";
                if (window.matchMedia("(orientation: landscape)").matches) {
                    endOfGame.style.display = "inline";
                } else {
                    endOfGame_hor.style.display = "inline";
                }
            }
        })
    });
}
