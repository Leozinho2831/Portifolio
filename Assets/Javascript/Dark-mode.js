function lightMode(){
    const body = document.querySelector('body');
    if (body.classList.contains('light')){
        body.classList.remove('light');       
    } else {
        body.classList.add('light');
    }
}

const modeCheckbox = document.getElementById('mode');
modeCheckbox.addEventListener('click', lightMode);

const modeCheckboxMobile = document.getElementById('mode-mobile');
        modeCheckboxMobile.addEventListener('click', lightMode);