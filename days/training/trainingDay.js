
const responsesTrainingData = {
    todayDate: getTodayDate(),
    correctRedPress: correctRedPress,
    correctBluePress: correctBluePress,
    correctFirstRedPress: correctFirstRedPress,
    correctFirstBluePress: correctFirstBluePress,
    incorrectRedPress: incorrectRedPress,
    incorrectBluePress: incorrectBluePress,
    redChoice: redChoice,
    blueChoice: blueChoice,
    allRedPresses: allRedPresses,
    allBluePresses: allBluePresses,
    // allCorrectTrainingPress: allCorrectTrainingPress,
    allChoices: allChoices
};

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(new Date().getTime() - milliseconds);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(new Date().getTime() - milliseconds);
});



let count = 0; // counter for iterations
// 1=red, 2=blue buttons
let buttonChoice = null;
let sessionInterval = null;
let startGame = null;
platform.saveSession(responsesTrainingData, true)

async function trainingDay() {
    return new Promise(resolve => {
        countingCars = 0;
        breaks = 0;
        //       let x = 0;
        document.getElementById("startButton").style.display = "inline";
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startButton").onclick = function () {
            // document.getElementById("loading").style.display = "inline";
            document.getElementById("startButton").style.display = "none";
            studySessionData.isDayDone = "startDay";
            platform.saveSession(studySessionData, true);
            function startIntervalTrainingDay() {
                let randCount = randCountAirplane();
                document.getElementById("break").style.display = "none";
                document.getElementById("redButton").style.display = "inline";
                document.getElementById("blueButton").style.display = "inline";
                document.getElementById("gameScreen").style.display = "inline";
                sessionIntervalTrainingDay = setInterval(
                    function carMove() {
                        let choseCar = randColor();
                        let carSpeed = randSpeedCar();
                        reset_airplane();
                        buttonChoice = 0;
                        if (count >= randCount) {
                            clearInterval(sessionIntervalTrainingDay);
                            document.getElementById("airplane").style.display = "inline";
                            document.getElementById("airplane").style.animationPlayState = "running";
                            setTimeout(startIntervalTrainingDay, 2000);
                            platform.saveSession(responsesTrainingData, false);
                            // if (new Date().getTime() - milliseconds > 30000) {
                            //     clearTimeout(sessionTimerTrainingDay);
                            // }
                            count = 0;
                            countingCars++;
                        } else {
                            count++;
                            // document.getElementById("counter").innerHTML = count;
                            // document.getElementById("carColorShow").innerHTML = choseCar;
                            // document.getElementById("carSpeedShow").innerHTML = carSpeed;
                            // document.getElementById("finishedShow").innerHTML = "Started";
                            countingCars++;
                            if (choseCar == 1) {
                                document.getElementById("redCar").style.display = "inline";
                                document.getElementById("redCar").style.animationPlayState = "running";
                                document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                                document.getElementById("redButton").onclick = function () {
                                    buttonChoice = buttonChoice + 1;
                                    if (buttonChoice == 1) {
                                        correctFirstRedPress.push(new Date().getTime() - milliseconds);
                                        // allCorrectTrainingPress.push(new Date().getTime() - milliseconds);
                                    } else {
                                        correctRedPress.push(new Date().getTime() - milliseconds);
                                    }
                                };
                                document.getElementById("blueButton").onclick = function () {
                                    buttonChoice = buttonChoice - 1;
                                    if (buttonChoice <= -1) {
                                        incorrectBluePress.push(new Date().getTime() - milliseconds);
                                    }
                                };

                                setTimeout(() => {
                                    reset_redCar();
                                    // document.getElementById("finishedShow").innerHTML = "Finished";
                                }, carSpeed * 1000);
                            } else {
                                document.getElementById("blueCar").style.display = "inline";
                                document.getElementById("blueCar").style.animationPlayState = "running";
                                document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                                document.getElementById("redButton").onclick = function () {
                                    buttonChoice = buttonChoice - 1;
                                    if (buttonChoice <= -1) {
                                        incorrectRedPress.push(new Date().getTime() - milliseconds);
                                    };
                                };
                                document.getElementById("blueButton").onclick = function () {
                                    buttonChoice = buttonChoice + 1;
                                    if (buttonChoice == 1) {
                                        correctFirstBluePress.push(new Date().getTime() - milliseconds);
                                        // allCorrectTrainingPress.push(new Date().getTime() - milliseconds);
                                    } else {
                                        correctBluePress.push(new Date().getTime() - milliseconds);
                                    }

                                };

                                setTimeout(() => {
                                    reset_blueCar();
                                    // document.getElementById("finishedShow").innerHTML = "Finished";
                                }, carSpeed * 1000);
                            };

                            // if (countingCars >= 280 && breaks <= 2) {
                            //     reset_redCar();
                            //     reset_blueCar();
                            //     reset_airplane();
                            //     clearInterval(sessionIntervalTrainingDay);
                            //     platform.saveSession(responsesTrainingData);
                            //     document.getElementById("gameScreen").style.display = "none";
                            //     document.getElementById("redButton").style.display = "none";
                            //     document.getElementById("blueButton").style.display = "none";
                            //     document.getElementById("break").style.display = "inline";
                            //     document.getElementById("iframe-element3").src = "../../timer/timer3.html";
                            //     document.getElementById("iframe-element3").style.display = "inline";
                            //     document.getElementById("iframe-element3").style.top = "0%";
                            //     countingCars = 0;
                            //     setTimeout(() => {
                            //         startIntervalTrainingDay();
                            //         document.getElementById("iframe-element3").src = "";
                            //         document.getElementById("iframe-element3").style.display = "none";
                            //     }, 30500);
                            //     breaks++;
                            // }
                        };
                    }, 1200);// (Maximal carSpeed)*1000

                let sessionTimerTrainingDay = setTimeout(function timeCount() {
                    platform.saveSession(responsesTrainingData, false);
                    clearInterval(sessionIntervalTrainingDay);
                    reset_airplane();
                    document.getElementById("blueButton").style.display = "none";
                    document.getElementById("redButton").style.display = "none";
                    resolve("done");
                    clearTimeout(sessionTimerTrainingDay);
                }, 300000);
                // }, 3000);
            }
            startIntervalTrainingDay();
            getMillisec();
        }
        // }
    })
}
