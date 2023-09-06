
const responsesButtons = {
    todayDate: getTodayDate(),
    correctRedPressButtons: correctRedPressButtons,
    correctBluePressButtons: correctBluePressButtons,
    correctFirstRedPressButtons: correctFirstRedPressButtons,
    correctFirstBluePressButtons: correctFirstBluePressButtons,
    incorrectRedPressButtons: incorrectRedPressButtons,
    incorrectBluePressButtons: incorrectBluePressButtons,
    redChoiceButtons: redChoiceButtons,
    blueChoiceButtons: blueChoiceButtons,
    allRedPressesButtons: allRedPressesButtons,
    allBluePressesButtons: allBluePressesButtons,
    // allCorrectFirstPressButtons: allCorrectFirstPressButtons,
    allChoicesButtons: allChoicesButtons
};

platform.saveSession(responsesButtons, true);
timeoutCountButtons = 0;
ButtonsNum = null;

document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesButtons.push(new Date().getTime() - milliseconds);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesButtons.push(new Date().getTime() - milliseconds);
});

//let sessionIntervalButtons = null;
let endButtons = null;
let countButtons = 0;
async function startIntervalButtons() {
    document.getElementById("redButton").style.display = "inline";
    document.getElementById("blueButton").style.display = "inline";
    document.getElementById("gameScreen").style.display = "inline";
    let randCount = randCountAirplane();
    return new Promise(resolve => {
        sessionIntervalButtons = setInterval(
            function carMove() {
                let choseCar = randColorButtons();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (countButtons >= randCount) {
                    clearInterval(sessionIntervalButtons);
                    setTimeout(startIntervalButtons, 2000);
                    document.getElementById("airplane").style.display = "inline";
                    document.getElementById("airplane").style.animationPlayState = "running";
                    platform.saveSession(responsesButtons, false);
                    countButtons = 0;
                } else {
                    countButtons++;
                    if (choseCar >= 0.5) {
                        document.getElementById("redCar").style.display = "inline";
                        document.getElementById("redCar").style.animationPlayState = "running";
                        document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctFirstRedPressButtons.push(new Date().getTime() - milliseconds);
                                // allCorrectFirstPressButtons.push(new Date().getTime() - milliseconds);
                            } else {
                                correctRedPressButtons.push(new Date().getTime() - milliseconds);
                            }
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectBluePressButtons.push(new Date().getTime() - milliseconds);
                            }
                        };

                        setTimeout(() => {
                            reset_redCar();
                        }, carSpeed * 1000);
                    } else {
                        document.getElementById("blueCar").style.display = "inline";
                        document.getElementById("blueCar").style.animationPlayState = "running";
                        document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectRedPressButtons.push(new Date().getTime() - milliseconds);
                            };
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctFirstBluePressButtons.push(new Date().getTime() - milliseconds);
                                // allCorrectFirstPressButtons.push(new Date().getTime() - milliseconds);
                            } else {
                                correctBluePressButtons.push(new Date().getTime() - milliseconds);
                            }

                        };

                        setTimeout(() => {
                            reset_blueCar();
                        }, carSpeed * 1000);
                    };

                };
            }, 1200);// (Maximal carSpeed)*1000

        let sessionTimerButtons = setTimeout(function timecountButtons() {
            // document.getElementById("blueButton").style.display = "none";
            // document.getElementById("redButton").style.display = "none";
            clearInterval(sessionIntervalButtons);
            clearTimeout(sessionTimerButtons);
            reset_airplane();
            // reset_blueCar();
            // reset_redCar();
            timeoutCountButtons++;
            endButtons = 1;
            if (timeoutCountButtons == 1) {
                platform.saveSession(responsesButtons, false).then(() => {
                    resolve("done4");
                })
            } else {
                clearInterval(sessionIntervalButtons);
                clearTimeout(sessionTimerButtons);
                reset_airplane();
                // reset_blueCar();
                // reset_redCar();
            }
        }, 90000);
        // }, 30000);
    })
};


function showButtons() {
    function repeatShowButtons() {
        document.getElementById('redButton').style.top = randTopButtons() + "%";
        document.getElementById('blueButton').style.top = randTopButtons() + "%";
        setTimeout(() => {
            timeoutForButtons();
        }, 1000);
    }

    function timeoutForButtons() {
        let repeat = setTimeout(() => {
            if (endButtons == 1) {
                clearTimeout(repeat);
                document.getElementById('redButton').style.top = "35%";
                document.getElementById('blueButton').style.left = "35%";
            } else {
                repeatShowButtons()
            }
        }, randTimeStars());
    }
    timeoutForButtons();
};