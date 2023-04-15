var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-btn");
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-Of-Notes");


var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Inefficient Cash Given");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});
function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
};

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}