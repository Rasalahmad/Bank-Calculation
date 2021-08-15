// common function for input
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear depost input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const depositBalanceTotal = parseFloat(totalText);
    const previousTotal = amount + depositBalanceTotal;
    totalElement.innerText = previousTotal;
}

function getCurrentBalance() {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceInputText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceInputText);
    return totalBalanceAmount;
}

function updateBalance(amount, isAdd) {
    const totalBalance = document.getElementById('balance-total');
    /* const totalBalanceInputText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceInputText); */
    const totalBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        const newTotalBalance = totalBalanceAmount + amount;
        totalBalance.innerText = newTotalBalance;
    } else {
        const newTotalBalance = totalBalanceAmount - amount;
        totalBalance.innerText = newTotalBalance;
    }
}
// handle deposit
document.getElementById('deposit-button').addEventListener('click', function() {
    const newDepositInputAmount = getInputValue('deposit-input');
    if (newDepositInputAmount > 0) {
        // update deposit amount
        updateTotalField('deposit-total', newDepositInputAmount);

        // update balance
        updateBalance(newDepositInputAmount, true);
    } else {
        alert('Invalid Input!!!')
    }

});

// handle withdraw
document.getElementById('withdrow-button').addEventListener('click', function() {
    const newWithdrawAmount = getInputValue('withdrow-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        // update withdraw balance
        updateTotalField('withdraw-total', newWithdrawAmount);

        // update total balance
        updateBalance(newWithdrawAmount, false);
    } else {
        alert('You have not enough balace');
    }
});






























/* // handle deposit 
document.getElementById('deposit-button').addEventListener('click', function() {
    // get the deposited amount
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositAmount);
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update account balance
    const balaceTotal = document.getElementById('balance-total');
    const balanceTotalText = balaceTotal.innerText;
    const previousBalancTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalancTotal + newDepositAmount;
    balaceTotal.innerText = newBalanceTotal;

    // clear deposit input field
    depositInput.value = '';
});


// handle withdraw using event handling
document.getElementById('withdrow-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdrow-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);


    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
}) */