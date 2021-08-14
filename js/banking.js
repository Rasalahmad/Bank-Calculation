// handle deposit 
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
})