function gettingPinNumber() {
    const pin = Math.round(Math.random() * 10000);
    const pinLength = pin + '';
    if (pinLength.length == 4) {
        return pin;
    }
    else {
        return gettingPinNumber();
    }
}

function pinGenerator() {
    const pinNumber = gettingPinNumber();
    const pinInputId = document.getElementById('pin-input');
    pinInputId.value = pinNumber;

}


document.getElementById('digit').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calNumberId = document.getElementById('typed-input');
    const calNumberValue = calNumberId.value;
    if (!isNaN(number)) {
        const displayedNumber = calNumberValue + number;
        calNumberId.value = displayedNumber;
    }
    else if (number == 'C') {
        calNumberId.value = '';

    }

});

document.getElementById('submit').addEventListener('click', function () {
    const pinCode = document.getElementById('pin-input');
    const typedNumber = document.getElementById('typed-input');

    const success = document.getElementById('success');
    const failed = document.getElementById('failed');

    if (pinCode.value == typedNumber.value) {
        success.style.display = 'block';
        failed.style.display = 'none';
    }
    else {
        failed.style.display = 'block';
        success.style.display = 'none';
    }

});
