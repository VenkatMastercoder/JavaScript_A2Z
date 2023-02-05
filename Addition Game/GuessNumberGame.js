let ans;
let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function b() {

    let x = Math.ceil(Math.random() * 100);
    let y = Math.ceil(Math.random() * 100);

    ans = x + y;

    document.getElementById("firstNumber").textContent = x;
    document.getElementById("secondNumber").textContent = y;
    document.getElementById("gameResult").textContent = "";
}
b();

function a() {
    let values = document.getElementById("userInput").value;
    console.log(values, ans);
    if (ans == values) {
        document.getElementById("gameResult").textContent = successMessage;
    } else {
        document.getElementById("gameResult").textContent = tryAgainMessage;
    }
}