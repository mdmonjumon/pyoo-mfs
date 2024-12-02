document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = './index.html';
})

document.getElementById('add-money-btn').addEventListener('click', function () {
    document.getElementById('add-money-container').classList.remove('hidden');
    document.getElementById('cash-out-container').classList.add('hidden');
})

document.getElementById('cash-out-btn').addEventListener('click', function () {
    document.getElementById('cash-out-container').classList.remove('hidden');
    document.getElementById('add-money-container').classList.add('hidden');
})

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    let addAmount = document.getElementById('amount-add').value;
    const addAmountNumber = parseFloat(addAmount);
    const balanceAmount = document.getElementById('balance').innerText;
    const balanceAmountNumber = parseFloat(balanceAmount);
    const amountPin = document.getElementById('add-money-pin').value;

    if (amountPin === '4444' && addAmountNumber > 0) {
        const newBalance = balanceAmountNumber + addAmountNumber;
        document.getElementById('balance').innerText = newBalance;
        alert('Your Money added to your balance');
        document.getElementById('amount-add').value = '';
        document.getElementById('add-money-pin').value = '';
    }
    else {
        alert('Type your amount and pin code');
    }
})
