function darkMode(){
    const body = document.querySelector('body');
    if (body.classList.contains('dark')){
        body.classList.remove('dark');       
    } else {
        body.classList.add('dark');
    }
}

const modeCheckbox = document.getElementById('mode');
modeCheckbox.addEventListener('click', darkMode);

const modeCheckboxMobile = document.getElementById('mode-mobile');
        modeCheckboxMobile.addEventListener('click', darkMode);