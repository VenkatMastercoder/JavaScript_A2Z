let bg = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let pading = document.getElementById("paddingInput");
let BorderRadius = document.getElementById("borderRadiusInput");



function a() {
    document.getElementById("customButton").style.backgroundColor = bg.value;
    document.getElementById("customButton").style.color = fontColor.value;
    document.getElementById("customButton").style.fontSize = parseInt(fontSize.value) + "px";
    document.getElementById("customButton").style.fontWeight = parseInt(fontWeight.value);
    document.getElementById("customButton").style.padding = parseInt(pading.value) + "px";
    document.getElementById("customButton").style.borderRadius = parseInt(BorderRadius.value) + "px";
}

a();