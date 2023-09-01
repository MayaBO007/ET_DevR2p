

//let nextClick = null;

//let noDisturb = null;
//let noDisturbBack = null;
async function startInstructions() {
    return new Promise(resolve => {
        document.getElementById("ins1").style.display = "inline";
        setTimeout(function () {
            document.getElementById("ins1").style.display = "none";
            document.getElementById("ins2").style.display = "inline";
        }, 2000);
        setTimeout(function () {
            document.getElementById("next").style.top = "89%"
            document.getElementById("next").style.display = "inline";
        }, 5000);
        document.getElementById("next").onclick = function () {
            nextClick = 1;
            if (nextClick == 1) {
                document.getElementById("ins2").style.display = "none";
                document.getElementById("next").style.display = "none";
                document.getElementById("ins3").style.display = "inline";
                setTimeout(function () {
                    document.getElementById("next").style.top = "87%"
                    document.getElementById("next").style.display = "inline";
                }, 5000);
                document.getElementById("next").onclick = function () {
                    nextClick = 2;
                    if (nextClick == 2) {
                        document.getElementById("ins3").style.display = "none";
                        document.getElementById("next").style.display = "none";
                        document.getElementById("ins4").style.display = "inline";
                    };
                    setTimeout(function () {
                        document.getElementById("next").style.display = "inline";
                    }, 5000);
                    document.getElementById("next").onclick = function () {
                        nextClick = 3;
                        if (nextClick == 3) {
                            document.getElementById("ins4").style.display = "none";
                            document.getElementById("next").style.display = "none";
                            document.getElementById("ins5").style.display = "inline";
                            setTimeout(function () {
                                document.getElementById("next").style.display = "inline";
                            }, 5000);
                            document.getElementById("next").onclick = function () {
                                nextClick = 4;
                                if (nextClick == 4) {
                                    document.getElementById("ins5").style.display = "none";
                                    document.getElementById("next").style.display = "none";
                                    document.getElementById("ins6").style.display = "inline";
                                    setTimeout(function () {
                                        document.getElementById("next").style.display = "inline";
                                    }, 5000);
                                    document.getElementById("next").onclick = function () {
                                        nextClick = 5;
                                        if (nextClick == 5) {
                                            document.getElementById("ins6").style.display = "none";
                                            document.getElementById("next").style.display = "none";
                                            document.getElementById("ins7").style.display = "inline";
                                            document.getElementById("doNotDisturb").style.display = "inline";
                                            setTimeout(function () {
                                                document.getElementById("next").style.display = "inline";
                                            }, 5000);


                                            document.getElementById("doNotDisturb").onclick = function () {
                                                noDisturb = 1;
                                                if (noDisturb == 1) {
                                                    document.getElementById("doNotDisturb").style.display = "none";
                                                    document.getElementById("ins7").style.display = "none";
                                                    document.getElementById("doNotDisturbPage").style.display = "inline";
                                                    document.getElementById("iphone").style.display = "inline";
                                                    document.getElementById("notIphone").style.display = "inline";
                                                    document.getElementById("doNotDisturbGoBack").style.display = "inline";
                                                    document.getElementById("next").style.display = "none";
                                                    document.getElementById("doNotDisturbGoBack").onclick = function () {
                                                        noDisturbBack = 1;
                                                        if (noDisturbBack == 1) {
                                                            document.getElementById("doNotDisturbPage").style.display = "none";
                                                            document.getElementById("iphone").style.display = "none";
                                                            document.getElementById("notIphone").style.display = "none";
                                                            document.getElementById("doNotDisturbGoBack").style.display = "none";
                                                            document.getElementById("ins7").style.display = "inline";
                                                            document.getElementById("next").style.display = "inline";
                                                        }
                                                    }
                                                }
                                            }

                                            document.getElementById("next").onclick = function () {
                                                nextClick = 6;
                                                if (nextClick == 6) {
                                                    document.getElementById("ins7").style.display = "none";
                                                    document.getElementById("doNotDisturb").style.display = "none";
                                                    document.getElementById("next").style.display = "none";
                                                    document.getElementById("ins8").style.display = "inline";


                                                    setTimeout(function () {
                                                        document.getElementById("next").style.display = "inline";
                                                    }, 5000);
                                                    document.getElementById("next").onclick = function () {
                                                        nextClick = 7;
                                                        if (nextClick == 7) {
                                                            document.getElementById("ins8").style.display = "none";
                                                            document.getElementById("next").style.display = "none";
                                                            document.getElementById("ins9").style.display = "inline";
                                                            setTimeout(function () {
                                                                document.getElementById("next").style.display = "inline";
                                                            }, 5000);
                                                            document.getElementById("next").onclick = function () {
                                                                nextClick = 8;
                                                                if (nextClick == 8) {
                                                                    document.getElementById("ins9").style.display = "none";
                                                                    document.getElementById("next").style.display = "none";
                                                                    document.getElementById("ins10").style.display = "inline";
                                                                    setTimeout(function () {
                                                                        document.getElementById("next").style.display = "inline";
                                                                    }, 5000);
                                                                    document.getElementById("next").onclick = function () {
                                                                        nextClick = 9;
                                                                        if (nextClick == 9) {
                                                                            console.log("done");
                                                                            document.getElementById("ins10").style.display = "none";
                                                                            document.getElementById("next").style.display = "none";
                                                                            // document.getElementById("next").style.display = "none";
                                                                            // document.getElementById("ins11").style.display = "inline";
                                                                            // setTimeout(function () {
                                                                            //     document.getElementById("next").style.display = "inline";
                                                                            // }, 1000);
                                                                            // document.getElementById("next").onclick = function () {
                                                                            //     nextClick = 10;
                                                                            //     if (nextClick == 10) {
                                                                            //         document.getElementById("ins11").style.display = "none";
                                                                            //         document.getElementById("next").style.display = "none";
                                                                            resolve("done")

                                                                            //     };

                                                                            //   };

                                                                        }

                                                                    }

                                                                }

                                                            }
                                                        }


                                                    }
                                                }

                                            }
                                        }

                                    }
                                }

                            }
                        }

                    }
                }
            }
        }
    })
}

