function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const newDepositInputAmount = parseFloat(depositInputText);
    // clear depost input field
    depositInput.value = '';
    return newDepositInputAmount;
}






// handle deposit
document.getElementById('deposit-button').addEventListener('click', function() {
    // access input field
    /* const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const newDepositInputAmount = parseFloat(depositInputText); */

    const newDepositInputAmount = getInputValue();

    // update deposit amount
    const depositBalance = document.getElementById('deposit-total');
    const depositBalanceText = depositBalance.innerText;
    const depositBalanceTotal = parseFloat(depositBalanceText);

    const totalDeposit = newDepositInputAmount + depositBalanceTotal;

    depositBalance.innerText = totalDeposit;
    // update balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceInputText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceInputText);
    const newTotalBalance = totalBalanceAmount + newDepositInputAmount;
    totalBalance.innerText = newTotalBalance;

    /* // clear depost input field
    depositInput.value = ''; */
});

// handle withdraw
document.getElementById('withdrow-button').addEventListener('click', function() {
    // access withdraw input
    const withdrawInput = document.getElementById('withdrow-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);


    // update withdraw balance
    const withdrawBalance = document.getElementById('withdraw-total');
    const withdrawBalanceText = withdrawBalance.innerText;
    const withdrawAmount = parseFloat(withdrawBalanceText);

    const totalWithdraw = newWithdrawAmount + withdrawAmount;
    withdrawBalance.innerText = totalWithdraw;

    // update total balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceInputText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceInputText);


    const newTotalBalance = totalBalanceAmount - newWithdrawAmount;
    totalBalance.innerText = newTotalBalance;


    // clear withdraw input
    withdrawInput.value = '';

})






























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