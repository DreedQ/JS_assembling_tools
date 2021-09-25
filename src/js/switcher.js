const btnShowHide = document.getElementById('switch');
const dateCalcBlock = document.getElementById("datecalc");
const timerBlock = document.getElementById("timer");


btnShowHide.addEventListener('click', () => {
    if (dateCalcBlock.style.display == 'none') {
        timerBlock.style.display = 'none'
        dateCalcBlock.style.display = 'block';
    } else {
        timerBlock.style.display = 'block'
        dateCalcBlock.style.display = 'none';
    }
});