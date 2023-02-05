let a = document.getElementById("counterValue");

function onIncrement() {
    a.textContent = parseInt(a.textContent) + 1;

    if (a.textContent < 0) {
        a.style.color = "Red";
    } else if (a.textContent > 0) {
        a.style.color = "Green";
    } else {
        a.style.color = "Black";
    }

}

function onDecrement() {
    a.textContent = parseInt(a.textContent) - 1;

    if (a.textContent < 0) {
        a.style.color = "Red";
    } else if (a.textContent > 0) {
        a.style.color = "Green";
    } else {
        a.style.color = "Black";
    }

}

function onReset() {
    a.textContent = 0;

    if (a.textContent < 0) {
        a.style.color = "Red";
    } else if (a.textContent > 0) {
        a.style.color = "Green";
    } else {
        a.style.color = "Black";
    }

}