'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function guessNum(){
    let num = 12; // загаданное число

    // ввод числа от пользователя
    let answer = prompt("Угадай число от 1 до 100");
    

    // если значение является числом, то сравниваем его
    if (isNumber(answer)){
        check();
    } else if (typeof(answer) === 'string'){
        alert("Введи число!");
        guessNum();
    } else if (answer === null){
        alert("Игра окончена");
    }

    // сравнивает введенное пользователем число и загаданное
    function check(){
        if (+answer === num){
            alert("Поздравляю, Вы угадали!!!");
        } else if (answer < num){
            confirm("Загаданное число больше");
            guessNum();
        } else if (answer > num) {
            confirm("Загаданное число меньше");
            guessNum();
        }
    }
}

guessNum();

// let a = prompt('test');
// console.log(a);
// console.log(isNumber (a));

// ok = '' / string
// cancel = null / object

// ok/cancel = 0 / number

// ok = '' / false
// cancel = null / false