'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function guessNum(){
    let num = Math.floor(Math.random()*100) + 1, // загаданное число
        gueses = 10; // количество попыток

    function game(){
        // ввод числа от пользователя
        let answer = prompt("Угадай число от 1 до 100");
    
        // если значение является числом, то сравниваем его
        
            if (isNumber(answer)){
                gueses--;
                console.log(gueses);
                check();
                
                
            } else if (typeof(answer) === 'string'){
                alert("Введи число!");
                game();
            } else if (answer === null){
                alert("Игра окончена");
            }
        
        

        // сравнивает введенное пользователем число и загаданное
        function check(){
            if (+answer === num){
                let decision = confirm(`Поздравляю, Вы угадали за ${gueses} попыток(-ки)!!! Хотели бы сыграть еще?`);
            if (decision){
                guessNum();
                }
            } else if (answer < num){
                confirm(`Загаданное число больше, осталось попыток: ${gueses}`);
                if (gueses > 0) {
                    game();
                } else {
                    let decision = confirm("Попытки закончились, хотите сыграть еще?");
                    if (decision){
                        guessNum();
                    }
                }
            } else if (answer > num) {
                confirm(`Загаданное число меньше, осталось попыток: ${gueses}`);
                if (gueses > 0) {
                    game();
                } else {
                    let decision = confirm("Попытки закончились, хотите сыграть еще?");
                    if (decision){
                        guessNum();
                    }
                }
            }
        }
        
    }

game();
}

guessNum();
