function Cal_Button() {
    let a = document.getElementById("billAmount").value;
    let b = document.getElementById("percentageTip").value;
    console.log(a, b);
    if (a === "" || b === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Vaid Input";
    } else {
        document.getElementById("errorMessage").textContent = "";

        let calculatedTip = (parseInt(b) / 100) * parseInt(a);
        let ans = calculatedTip + parseInt(a);
        console.log(a, b);


        document.getElementById("tipAmount").value = calculatedTip;
        document.getElementById("totalAmount").value = ans;
    }
}