function getInputValue(inputId){
    const depositAmount = document.getElementById(inputId);
    const depositInputText = depositAmount.value;
    depositInput = parseFloat(depositInputText);
    // clear input field 
    depositAmount.value = '';
    return depositInput;
}

function updateTotalField(totalFieldId, Input){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + Input;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(Input, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositInput ;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositInput ;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    // const depositAmount = document.getElementById('deposit-amount');
    // const depositInputText = depositAmount.value;
    // depositInput = parseFloat(depositInputText);
    

    
    // get current deposit 
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositInput;
    
    // update balance 

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositInput ;
    const depositInput = getInputValue('deposit-amount');
    if(depositInput> 0){
        updateTotalField('deposit-total', depositInput);
        updateBalance(depositInput, true);
    }
    
    
    // clear input field 
    // depositAmount.value = ''; 

    
});

// withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // const withdrawAmount = document.getElementById('withdraw-amount');
    // const withdrawInputText = withdrawAmount.value;
    // withdrawInput = parseFloat(withdrawInputText);
    
    // get current deposit 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawInput;
    // console.log(withdrawTotalText);
    

    // update balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawInput ;
    const withdrawInput = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();
    if(withdrawInput > 0 && withdrawInput < currentBalance){
        updateTotalField('withdraw-total', withdrawInput);
        updateBalance(withdrawInput, false);
     
    }
    if (withdrawInput > currentBalance){
        console.log('You can not withdraw money');
    }
    // clear input field 
    // withdrawAmount.value = '';
});