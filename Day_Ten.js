function weather(temp) {
    if (temp < 0)
        console.log("Опасно холодно!")
    else if (temp >= 0 && temp <= +5)
        console.log("Очень холодно")
    else if (temp >= +5 && temp <= +20)
        console.log("Прохладно")
    else
        console.log("Тепло")
}

weather(+20);


const fivePercent = '5%';
const tenPercent = '10%';

function sale(sumPrice) {
    if (sumPrice > 1000)
        console.log(sumPrice - (sumPrice / 100 * parseFloat(fivePercent)))
    else if (sumPrice > 5000)
        console.log(sumPrice - (sumPrice / 100 * parseFloat(tenPercent)))
}

sale(1001);

function age(year) {
    if (year < 18)
        console.log("Вы - подросток")
    else if (year >= 18 && year <= 65)
        console.log("Вы - взрослый")
    else
        console.log("Вы - пенсионер")
}

age(100);

function operatingMode(time) {
    if (time >= 9 && time <= 18)
        console.log("Магазин открыт")
    else
        console.log("Магазин закрыт")
}

operatingMode(19);

function assessment(ball) {
    if (ball >= 90 && ball <= 100)
        console.log("Отлично!")
    else if (ball >= 70 && ball <= 89)
        console.log("Хорошо")
    else if (ball >= 50 && ball <= 69)
        console.log("Удовлетворительно")
    else
        console.log("Неудачно")
}

assessment(49);

// Оценка результатов теста: Допустим, у вас есть оценки за тест от 0 до 100.
// Классифицируйте результат как "отлично" (от 90 до 100), "хорошо" (от 70 до 89), "удовлетворительно" (от 50 до 69) и "неудачно" (ниже 50).
// В зависимости от результата, выводите соответствующее сообщение