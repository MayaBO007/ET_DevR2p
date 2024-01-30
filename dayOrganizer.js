function moveToDay() {
    platform.getAllSessions().then((data) => {
        getIndexSessionData(data).then((indexI) => {
            studySessionData = data[indexI];
            let updatedDates = updateDates();
            let todayDate = new Date;
            todayDate = todayDate.getDate();

            const moveToAppButton = document.getElementById("moveToAppButton");
            const loading = document.getElementById("loading");
            const endOfGame = document.getElementById("endOfGame");
            const endOfGame_hor = document.getElementById("endOfGame_hor");
            const problem = document.getElementById("problem");
            const problem_hor = document.getElementById("problem_hor");

            if (todayDate == "30") { //NO ZEROS IN FRONT OF SINGEL DIGITS
                if (studySessionData.doneTest1 != "doneTest1") {
                    platform.goToUrl("days/twoTests/twoTests.html");
                } else if ((studySessionData.doneTest1 === "doneTest1") && (studySessionData.doneTest2 != "doneTest2")) {
                    platform.goToUrl("days/devTest/devTest.html");
                } else if (studySessionData.doneTest2 === "doneTest2") {
                    moveToAppButton.style.display = "none";
                    loading.style.display = "none";
                    if (window.matchMedia("(orientation: landscape)").matches) {
                        endOfGame.style.display = "inline";
                    } else {
                        endOfGame_hor.style.display = "inline";
                    }
                    endOfGame.style.display = "inline";
                } else {
                    if (window.matchMedia("(orientation: landscape)").matches) {
                        problem.style.display = "inline";
                    } else {
                        problem_hor.style.display = "inline";
                    }
                }
            } else if ((typeof studySessionData === "undefined" || studySessionData.doneInstructions === "") && (Number(todayDate) == 29)) {
                platform.goToUrl("instructions/instructions.html");
                studySessionData.doneInstructions = "stratIns";
            } else if (studySessionData.doneInstructions === "doneInstructions") {
                if (
                    studySessionData.isDayDone === "done" &&
                    studySessionData.doneTest1 !== "doneTest1" ||
                    studySessionData.isDayDone != "done" && (Number(todayDate) === Number(dayDate()) ||
                        Number(todayDate) === (Number(dayDate()) + 1))) {
                    platform.goToUrl("days/training/training.html");
                } else if (
                    studySessionData.isDayDone !== "done" &&
                    (updatedDates.fullDate.getDate() !== Number(dayDate() || updatedDates.fullDate.getDate() !== (Number(dayDate()) + 1)))
                ) {
                    if (window.matchMedia("(orientation: landscape)").matches) {
                        problem.style.display = "inline";
                    } else {
                        problem_hor.style.display = "inline";
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
            } else {
                if (window.matchMedia("(orientation: landscape)").matches) {
                    problem.style.display = "inline";
                } else {
                    problem_hor.style.display = "inline";
                }
            }
        });
    });
}
