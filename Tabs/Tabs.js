let a = document.getElementById("aboutButton");
let b = document.getElementById("timeToVisitButton");
let c = document.getElementById("attractionsButton");

let d = document.getElementById("aboutTab");
let e = document.getElementById("timeToVisitTab");
let f = document.getElementById("attractionsTab");


let n = f.classList.add("d-none");
let k = d.classList.add("d-none");

function a1() {
    d.classList.remove("d-none");
    e.classList.add("d-none");
    f.classList.add("d-none");

    a.classList.add("selected-button");
    b.classList.remove("selected-button");
    c.classList.remove("selected-button");
}

function b1() {
    e.classList.remove("d-none");
    d.classList.add("d-none");
    f.classList.add("d-none");

    b.classList.add("selected-button");
    a.classList.remove("selected-button");
    c.classList.remove("selected-button");
}

function c1() {
    f.classList.remove("d-none");
    e.classList.add("d-none");
    d.classList.add("d-none");

    c.classList.add("selected-button");
    b.classList.remove("selected-button");
    a.classList.remove("selected-button");
}