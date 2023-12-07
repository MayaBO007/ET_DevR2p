

// move to main function
function timeline() {
    platform.getAllSessions().then((data) => {
        getIndexSessionData(data).then((indexI) => {
            studySessionData = data[indexI];
            deleteFromSessionData();
            let updatedDates = updateDates();
            if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
                if (window.matchMedia("(orientation: landscape)").matches) {
                    document.getElementById("fiveAM").style.display = "inline";
                } else {
                    document.getElementById("fiveAM_hor").style.display = "inline";
                }
                setTimeout(() => {
                    moveToDay();
                }, timeToFive());
            }
            else if ((updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) || (daysMissed.daysMissedNum == null)) {
                if (updatedDates.fullDate.getDate() != updatedDates.yesterdayPlusOne.getDate()) {
                    daysMissed.daysMissedNum = 1;
                    platform.saveSession(daysMissed);
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
                            studySessionData.expDaysDate = updatedDates.fullDate;
                            let goFour = async function () {
                                deleteFromSessionData();
                                document.getElementById("redButton").style.display = "inline";
                                document.getElementById("blueButton").style.display = "inline";
                                document.getElementById("gameScreen").style.display = "inline";
                                let my_awesome_script = document.createElement('script');
                                my_awesome_script.setAttribute('src', '../../functions/orientation.js');
                                // my_awesome_script.src = "../functions/orientation.js";
                                document.body.appendChild(my_awesome_script);
                                studySessionData.doneTest2 = "stratTest2";
                                platform.saveSession(studySessionData, true);
                                getMillisec();
                                let startIntervalTest = async function () {
                                    let startTrainning = await startInterval2Tests2();
                                    // button = randDevButton();
                                    if (startTrainning == "done3") {
                                        clearInterval(sessionInterval2Test2);
                                        document.getElementById('startDevtestButtonBlue').style.display = "inline";
                                        document.getElementById("iframe-element").style.top = "5%"
                                        document.getElementById("iframe-element").src = "../../timer/timer.html";
                                        document.getElementById('iframe-element').classList.remove('hidden');
                                        document.getElementById("iframe-element").style.display = "inline";
                                        setTimeout(() => {
                                            clearInterval(sessionInterval2Test2);
                                            document.getElementById('startDevtestButtonBlue').style.display = "none";
                                            document.getElementById("iframe-element").style.display = "none";
                                            let startDevaluation = async function () {
                                                let doneTest2 = await startDevTest(); // add promise and resolve
                                                if (doneTest2 == "doneTest2") {
                                                    document.getElementById("redButton").style.display = "none";
                                                    document.getElementById("blueButton").style.display = "none";
                                                    studySessionData.doneTest2 = "doneTest2";
                                                    studySessionData.expDaysDate = updatedDates.fullDate;
                                                    platform.saveSession(studySessionData, true).then(() => {
                                                        clearInterval(sessionIntervalTest);
                                                        reset_blueCar()
                                                        reset_redCar()
                                                        sumCorrectFirstPress().then((sum) => {
                                                            showWinningsEnd(sum);
                                                            platform.saveSession(totalWins, true);
                                                            setTimeout(() => {
                                                                hideWinningsEnd();
                                                                document.getElementById("endOfGame").style.display = "inline";
                                                            }, 10000);
                                                        })
                                                    })
                                                }
                                            }
                                            startDevaluation();
                                        }, 16000);
                                    }
                                }
                                startIntervalTest();

                            }
                            goFour()
                            // platform.saveSession(studySessionData, true).then(() => {
                            //     document.getElementById("endDayMsg").style.display = "inline";
                            //     document.getElementById("endDayMsg").addEventListener("click", function () {
                            //         showWinnings()
                            //         setTimeout(() => {
                            //             platform.goToUrl("days/devTest/devTest.html");
                            //         }, timeToFive())
                            //         setTimeout(() => {
                            //             hideWinnings();
                            //             if (window.matchMedia("(orientation: landscape)").matches) {
                            //                 document.getElementById("fiveAM").style.display = "inline";
                            //             } else {
                            //                 document.getElementById("fiveAM_hor").style.display = "inline";
                            //             }
                            //         }, 10000);
                            //     })
                            // })
                        }

                    }
                    startTwoTests()
                }
                // }
            } else {
                document.getElementById("endOfGame").style.display = "inline";
            }
        })
    })
}



// let getlastData = await getData();
// if (getlastData == "gotData") {
//     studySessionData = savedData[0][savedData[0].length - 1];
//     let updatedDates = updateDates();
