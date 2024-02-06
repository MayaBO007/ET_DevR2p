

// move to main function
function timeline() {
    platform.getAllSessions().then((data) => {
        getIndexSessionData(data).then((indexI) => {
            studySessionData = data[indexI];
            deleteFromSessionData();
            let updatedDates = updateDates();
            if (updatedDates.fullDate.getDate() == updatedDates.lastGame.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
                if (window.matchMedia("(orientation: landscape)").matches) {
                    document.getElementById("fiveAM").style.display = "inline";
                } else {
                    document.getElementById("fiveAM_hor").style.display = "inline";
                }
                setTimeout(() => {
                    moveToDay();
                }, timeToFive());
            }
            else if ((updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) || (updatedDates.yesterday.getDate() == updatedDates.yesterdayPlusOne.getDate())) {
                if (updatedDates.fullDate.getDate() != updatedDates.yesterdayPlusOne.getDate()) {
                    getIndexMissedDays(data).then((indexM) => {
                        if (indexM == null || indexM == undefined || indexM < 1) {
                            daysMissedNum.push(1);
                            platform.saveSession(daysMissed);
                        } else {
                            document.getElementById("endOfGame").style.display = "inline";
                        }
                    })
                }
                if (0 <= updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
                    document.getElementById("fiveAM").style.display = "inline";
                    setTimeout(() => {
                        moveToDay();
                    }, timeToFiveSameDay());
                } else {
                    let startTwoTests = async function () {
                        let doneTest1 = await start2tests(); // add promise and resolve
                        if (doneTest1 == "done") {
                            studySessionData.doneTest1 = 'doneTest1';
                            let updatedDates = updateDates();
                            studySessionData.expDaysDate = updatedDates.fullDate;
                            platform.saveSession(studySessionData, true).then(() => {
                                document.getElementById("endDayMsg").style.display = "inline";
                                document.getElementById("endDayMsg").addEventListener("click", function () {
                                    showWinnings()
                                    clearInterval(sessionIntervalButtons);
                                    setTimeout(() => {
                                        if (window.matchMedia("(orientation: landscape)").matches) {
                                            hideWinnings();
                                            document.getElementById("fiveAM").style.display = "inline";
                                        } else {
                                            hideWinnings();
                                            document.getElementById("fiveAM_hor").style.display = "inline";
                                        }
                                    }, 10000)
                                    setTimeout(() => {
                                        moveToDay();
                                    }, timeToFive())
                                })
                            }).catch(() => {
                                if (saveAttemptTraining >= 2000) {
                                    document.getElementById("problem").style.display = "inline";
                                } else {
                                    saveAttemptTraining++;
                                    savingTraining()
                                }
                            })
                        }

                    }
                    startTwoTests()
                }
            } else {
                document.getElementById("endOfGame").style.display = "inline";
            }
        })
    })
}
