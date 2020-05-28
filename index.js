var robot = require('robotjs');


function main(){

    console.log("Starting...");

    while (true){
        sleep(2000);
        robot.moveMouseSmooth(1250,630);
        robot.mouseClick();
        sleep(8000);
    }

    console.log("Done.");
}

function sleep(ms){
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();