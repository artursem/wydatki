
const session = {}; // session object??

const panelUser = document.querySelector('#panel-user');
const btnUser = document.querySelectorAll('.choose-user__user');

const panelPin = document.querySelector('#panel-pin');
const btnPin = document.querySelectorAll('.enter-pin__btn');
const dotsPin = document.querySelectorAll('.dot');

const panelMain = document.querySelector('#panel-main');


function chooseUser(e) {
    let currentUser = this.dataset.user;
    // save to session object?
    panelUser.classList.add('pos-down');
    panelPin.classList.remove('pos-up');
    panelPin.classList.add('pos-screen');
    
    session.user = currentUser;
}

let enteredPin = [];
function enterPin(e) {
    const numberPin = this.dataset.pin;
    enteredPin.push(numberPin);

    const nrPin = enteredPin.length;
    dotsPin[nrPin-1].style.backgroundColor = 'white';
    if (enteredPin.length === 4) {
        console.log(enteredPin.join(''));
        dotsPin.forEach(dot => dot.style.backgroundColor = '');
        enteredPin = [];
        panelPin.classList.remove('pos-screen');
        panelPin.classList.add('pos-up');

        panelMain.classList.remove('pos-up');
        panelMain.classList.add('pos-screen');
    }
    // is pin correct?

}

btnUser.forEach(btn => btn.addEventListener('click', chooseUser));
btnPin.forEach(btn => btn.addEventListener('click', enterPin));