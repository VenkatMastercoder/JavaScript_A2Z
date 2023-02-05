let a = 200;
document.getElementById("image").style.width = a + "px";
let max_size = 300;
let min_size = 100;

function minus() {
    if (min_size >= a) {
        document.getElementById("warningMessage").textContent = "Warning";
    } else {
        a = a - 5;
        let l = document.getElementById("image").style.width = a + "px";
        document.getElementById("imageWidth").textContent = l;
        document.getElementById("warningMessage").textContent = "";
    }
}

function plus() {
    if (max_size > a) {
        a = a + 5;
        let l = document.getElementById("image").style.width = a + "px";
        document.getElementById("imageWidth").textContent = l;
        document.getElementById("warningMessage").textContent = "";
    } else {
        document.getElementById("warningMessage").textContent = "Warning";
    }
}