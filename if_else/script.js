let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
minValue = (minValue === '0') ? minValue : (parseInt(minValue) || 0); 
minValue = minValue < -999 ? -999 : minValue;
maxValue = (maxValue === '0') ? maxValue : (parseInt(maxValue) || 500); 
maxValue = maxValue > 999 ? 999 : maxValue; 
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
const phraseRandom = Math.round( Math.random()*2);
const questionPhrase = (phraseRandom === 2) ?
         `Сейчас угадаю... ${answerNumber }?`: 
         `Нет ничего проще! ${answerNumber}?`;
     
orderNumberField.innerText = orderNumber;
answerField.innerText = questionPhrase;

document.getElementById('btnRetry').addEventListener('click', function () {
     minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
     maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    minValue = (minValue === '0') ? minValue : (parseInt(minValue) || 0); 
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = (maxValue === '0') ? maxValue : (parseInt(maxValue) || 500); 
    maxValue = maxValue > 999 ? 999 : maxValue;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 0;
    gameRun = true;
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = questionPhrase;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;   
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            const questionPhrase = (phraseRandom === 2) ?
                  `Сейчас угадаю... ${answerNumber }?`:
                  `Нет ничего проще! ${answerNumber}?`;

            orderNumberField.innerText = orderNumber;
            answerField.innerText = questionPhrase ;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            const questionPhrase = (phraseRandom === 2) ?
                  `Сейчас угадаю... ${answerNumber }?`:
                  `Нет ничего проще! ${answerNumber}?`;

            orderNumberField.innerText = orderNumber;
            answerField.innerText = questionPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const questionPhrase = (phraseRandom === 2) ?
             `Это было легко!`:
             `Я так и знал!`;
        answerField.innerText = questionPhrase;
        gameRun = false;
    }
})