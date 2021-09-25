import "../../node_modules/howler/src/howler.core.js";
import alarm from '../audio/alarm.mp3'
// let alarm = require("../audio/alarm.mp3");

let sound = new Howl({
    src: [alarm]
});

// sound.play()

// Получает элементы из index.html
const startTimer = document.getElementById('startBtn');
const stopTimer = document.getElementById('stopBtn');

let SetHours = document.getElementById('setHr');
let SetMinutes = document.getElementById('setMin');
let SetSeconds = document.getElementById('setSec');
let info = document.getElementById('infoField');

// Навешиваем слушателя событий на кнопки старт
startTimer.addEventListener('click', (event) => {
    event.preventDefault();
    timer();
    info.innerHTML = 'Отсчёт идёт.'
        // console.log('START TIMER.');
});

// Навешиваем слушателя событий на кнопки стоп
stopTimer.addEventListener('click', (event) => {
    event.preventDefault();
    clearTimeout(ticker); //обнуляет интервал времени таймера
    info.innerHTML = 'Отсчёт остановлен.'
    sound.stop()
        // console.log('STOP TIMER.');
});

// обьявление переменной для записи туда ID setInterval
let ticker;

export function timer() {
    // Берёт значение полей ввода таймера
    let hrs = SetHours.value;
    let min = SetMinutes.value;
    let sec = SetSeconds.value;
    // Проверяет на наличие секунд в поле ввода и если есть уменьшает на единицу через 1 секунду, переписывая значение в поле ввода
    if (sec > 0) {
        ticker = setInterval(() => {
            sec = SetSeconds.value;
            SetSeconds.value--;
            // console.log(sec);
            if (sec <= 1) {
                clearInterval(ticker)
                timer();
            }
        }, 1000);
    } else {
        // если сеунды  в поле ввода = 0, уменьшает поле ввода минут на единицу, устанавливает в поле секунд "59" и перезапускает функцию
        if (min > 0) {
            SetMinutes.value--;
            SetSeconds.value = 59;
            timer();
        } else {
            // если минуты  в поле ввода = 0, уменьшает поле ввода часов на единицуб устанавливает в поле секунд и минут по "59", и перезапускает функцию
            if (hrs > 0) {
                SetHours.value--;
                SetSeconds.value = 59;
                SetMinutes.value = 59;
                timer();
            } else {
                info.innerHTML = 'Отсчёт окончен.';
                sound.play();
                console.log("DING - DONG!!!")
            }
        }
    }
}





// export function timer() {
//     let hrs = SetHours.value;
//     let min = SetMinutes.value;
//     let sec = SetSeconds.value;

//     if (sec > 0) {
//         ticker = setTimeout(() => {
//             SetSeconds.value--;
//             timer()
//         }, 1000)
//     } else {
//         if (min > 0) {
//             SetMinutes.value--;
//             SetSeconds.value = 59;
//             timer()
//         } else {
//             if (hrs > 0) {
//                 SetHours.value--;
//                 SetMinutes.value = 59;
//                 timer();
//             } else {
//                 console.log('Finish')
//             }
//         }
//     }
// }