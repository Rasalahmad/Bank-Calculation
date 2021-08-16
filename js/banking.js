// user input function
function userInput(userId) {
    const userInputId = document.getElementById(userId);
    const userInputText = userInputId.value;
    const newInput = parseFloat(userInputText);
    userInputId.value = '';
    return newInput;
}

function updateBalance(inputField, amount) {
    const previousAmount = document.getElementById(inputField);
    const previousAmountText = previousAmount.innerText;
    const previousAmountTotal = parseFloat(previousAmountText);
    const total = previousAmountTotal + amount;
    previousAmount.innerText = total;
}

function currentBalance() {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    return totalBalanceAmount;

}

function updateMainBalance(amount, isAdd) {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceAmount = currentBalance();
    if (isAdd == true) {
        const presentTotal = totalBalanceAmount + amount;
        totalBalance.innerText = presentTotal;
    } else {
        const presentTotal = totalBalanceAmount - amount;
        totalBalance.innerText = presentTotal;
    }
}
document.getElementById('deposit-button').addEventListener('click', function() {
    const depositAmount = userInput('deposit-input');
    if (depositAmount > 0) {
        updateBalance('deposit-total', depositAmount);
        updateMainBalance(depositAmount, true);
    } else {
        alert('Dusto User');
    }
});

document.getElementById('withdrow-button').addEventListener('click', function() {
    const withdrawAmount = userInput('withdrow-input');
    const previousAmount = currentBalance();
    if (withdrawAmount > 0 && withdrawAmount < previousAmount) {
        updateBalance('withdraw-total', withdrawAmount);
        updateMainBalance(withdrawAmount, false);
    } else {
        alert('Invalid Input');
    }

});