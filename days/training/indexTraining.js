
function timeline() {
    platform.getAllSessions().then((data) => {
        getIndexSessionData(data).then((indexI) => {
            studySessionData = data[indexI];
            deleteFromSessionData();
            let updatedDates = updateDates();
            let todayDate = getTodayDate().slice(0, 2);
            if (Number(todayDate) === Number(dayDate()) && (studySessionData.isDayDone == "")) {
                updatedDates.lastGame = updatedDates.lastGameDate;
                updatedDates.yesterdayPlusOne = updatedDates.fullDate;
            }
            console.log("updatedDates.fullDate.getDate():", updatedDates.fullDate.getDate());
            console.log("updatedDates.yesterdayPlusOne.getDate():", updatedDates.yesterdayPlusOne.getDate());
            console.log("daysMissed.daysMissedNum:", updatedDates.yesterday.getDate());

            if (updatedDates.fullDate.getDate() == updatedDates.lastGame.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
                // document.addEventListener("DOMContentLoaded", function () {
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
                        missingDaysData = data[indexM]
                        missingDays = missingDaysData.daysMissedNum;
                        if (missingDays != 1) {
                            deleteFromMissingDayData();
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
                    deleteFromSessionData();
                    let goTraining = async function () {
                        let isDayDone = await trainingDay();
                        if (isDayDone == "done") {
                            let updatedDates = updateDates();
                            studySessionData.isDayDone = "done";
                            studySessionData.expDaysDate = updatedDates.fullDate;
                            platform.saveSession(studySessionData, true).then(() => {
                                document.getElementById("endDayMsg").style.display = "inline";
                                document.getElementById("endDayMsg").addEventListener("click", function () {
                                    showWinnings()
                                    clearInterval(sessionIntervalTrainingDay);
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
                    goTraining();
                }
            } else {
                document.getElementById("endOfGame").style.display = "inline";
            }
        })
    })
}


// startDayOne function () {
//  return new Promise(resolve => {

//     let savedData = [];
//     savedData = platform.getAllSessions();
// let getlastData = await getData();
// if (getlastData == "gotData") {
// studySessionData = savedData[0][savedData[0].length - 1];
// resolve("gotData");

//     startDayOne();

//     let updatedDates = updateDates();
//     let goFirst = async function () {
//         let doneDay1 = await trainingFirstDay();
//         if (doneDay1 == "doneDayOne") {
//             studySessionData.doneDay1 = "doneDayOne";
//             studySessionData.expDaysDate = updatedDates.fullDate;
//             platform.saveSession(responsesFirstData, false);
//             platform.saveSession(studySessionData, true);
//             document.getElementById("endDayMsg").style.display = "inline";
//             document.getElementById("endDayMsg").addEventListener("click", function () {
//                 showWinnings()
//                 setTimeout(() => {
//                     platform.goToUrl("days/twoTests/dayTwo.html");
//                 }, 10000)
//             })
//         }
//     }
//     goFirst();
// };

