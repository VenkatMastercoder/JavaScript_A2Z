let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let a1 = 0;

function a() {
    if (a1 === 7) {
        a1 = a1 - 7;
    } else {
        document.getElementById("bgContainer").style.backgroundColor = bgColorsArray[a1];
        a1 = a1 + 1;

    }
}

a();