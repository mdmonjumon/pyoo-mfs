document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const loginPhoneNumber = document.getElementById('login-phone-number').value;
    const loginPin = document.getElementById('login-pin').value;
    if(loginPhoneNumber === '5' && loginPin === '1234'){
        
    }
    else{
        alert('Please type your Phone Number and PIN code');
    }

});