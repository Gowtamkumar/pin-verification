function getPin() {
    const ramdom = Math.random() * 10000;
    const pin = (ramdom + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}
//setpin generate
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

//handle calculator button event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    //this condition digit or number valid check
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typedigit = document.getElementById('type-digit');
            typedigit.value = "";
        }
    } else {
        const typedigit = document.getElementById('type-digit');
        typedigit.value = typedigit.value + digit;
        console.log(typedigit.value);
    }

});
function checkPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('type-digit').value;


    let empty = '';
    if (pin === empty) {
        const emptyfield = document.getElementById('empty1');
        emptyfield.style.display = "block";
        //empty for style
        const pinInput = document.getElementById('pin');
        pinInput.style.borderColor = "red";
        const typedigit = document.getElementById('type-digit');
        typedigit.style.borderColor = "red";



        const currect = document.getElementById('currect-pin');
        currect.style.display = "none";

        console.log(emptyfield);
    } else {
        if (pin === typedPin) {
            incurrectCurrect('block', 'none');
            const emptyfield = document.getElementById('empty1');
            emptyfield.style.display = "none";
        } else if (pin !== typedPin) {
            incurrectCurrect('none', 'block');
            const emptyfield = document.getElementById('empty1');
            emptyfield.style.display = "none";
        }
    }
}
//check message option
function incurrectCurrect(currectStatus, incurrectStatus) {
    const correct = document.getElementById('currect-pin');
    correct.style.display = currectStatus;
    const incorrect = document.getElementById('incurrect-pin');
    incorrect.style.display = incurrectStatus;
}