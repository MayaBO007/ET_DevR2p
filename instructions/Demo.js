


let redPressDemo = null;
let bluePressDemo = null;
let mistakeDemo = null;

async function demo() {
    return new Promise(resolve => {
        // let afterOnload = async function () {
        //     let startDemo = await onloadPics();
        //     if (startDemo == "OK") {
        // document.getElementById("gameScreen").onload = () => {

        document.getElementById("redButton").style.display = "flex";
        document.getElementById("blueButton").style.display = "flex";
        document.getElementById("gameScreen").style.display = "inline";
        // document.getElementById("ins12").style.display = "none";
        setTimeout(() => {
            document.getElementById("redCar").style.display = "inline";
            document.getElementById("redCar").style.animationPlayState = "running";
            document.getElementById("redCar").style.animationDuration = "1.5s"
            document.getElementById("redCar").style.animationIterationCount = "1";
            document.getElementById("redButton").onclick = function () {
                redPressDemo = 1;
                if (redPressDemo == 1) {
                    document.getElementById("corrRed").style.display = "inline";
                    setTimeout(function () {
                        document.getElementById("corrRed").style.display = "none";
                        document.getElementById("blueCar").style.display = "inline";
                        document.getElementById("blueCar").style.animationPlayState = "running";
                        document.getElementById("blueCar").style.animationIterationCount = "1";
                        document.getElementById("blueCar").style.animationDuration = "1.5s"
                    }, 1000);
                    document.getElementById("blueButton").onclick = function () {
                        bluePressDemo = 1;
                        if (bluePressDemo == 1) {
                            document.getElementById("corrBlue").style.display = "inline";
                            setTimeout(function () {
                                document.getElementById("corrBlue").style.display = "none";
                                document.getElementById("airplane").style.display = "inline";
                                document.getElementById("airplane").style.animationPlayState = "running";
                                document.getElementById("airplane").style.animationDuration = "4s"

                                document.getElementById("blueButton").onclick = function () {
                                    bluePressDemo = 2;
                                    if (bluePressDemo == 2) {
                                        document.getElementById("rest").style.display = "inline";
                                        setTimeout(() => {
                                            document.getElementById("rest").style.display = "none";
                                        }, 1500);
                                    }
                                }
                                document.getElementById("redButton").onclick = function () {
                                    bluePressDemo = 2;
                                    if (bluePressDemo == 2) {
                                        document.getElementById("rest").style.display = "inline";
                                        setTimeout(() => {
                                            document.getElementById("rest").style.display = "none";
                                        }, 2500);
                                    }
                                }
                            }, 1000);

                            setTimeout(() => {
                                document.getElementById("airplane").style.display = "none";
                                document.getElementById("rest").style.display = "none";
                                resolve("done");
                            }, 4000);
                        }
                    }
                    document.getElementById("redButton").onclick = function () {
                        mistakeDemo = 1;
                        if (mistakeDemo == 1 & bluePressDemo == null) {
                            document.getElementById("wrongBlue").style.display = "inline";
                            setTimeout(function () {
                                document.getElementById("wrongBlue").style.display = "none";
                            }, 2000);

                        }
                    }
                }
            }

            document.getElementById("blueButton").onclick = function () {
                mistakeDemo = 1;
                if (mistakeDemo == 1) {
                    document.getElementById("wrongRed").style.display = "inline";
                    setTimeout(function () {
                        document.getElementById("wrongRed").style.display = "none";
                        mistakeDemo = 0;
                    }, 2000);

                }
            }
            setTimeout(() => {
                if (redPressDemo == null || bluePressDemo == null) {
                    document.getElementById("pressButton").style.display = "inline";
                    setTimeout(function () {
                        document.getElementById("pressButton").style.display = "none";
                    }, 3000);
                }
            }, 60000);
            // }
            // }
            // afterOnload();
        }, 5000)
    });
}
