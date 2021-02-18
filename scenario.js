var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;

var gamePattern = [];
var userClickedPattern = [];

var started = false;

// если нажата любая клавиша - запуск игры
$("h1").click( function() {
    if (!started) {
        nextSequence();
        started = true;
    }
})

userSlick ();

// Проверка правильности ответов
function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);      
        }
    } else {
        wrong(); 
        startOver(); // обнуляем игру и начинаем слушать клавиши для запуска снова
    }
}

// Клик компьютера и добавление в массив
function nextSequence() {
    
    // определяем следующий уровень
    level++;
    $("#level-title").text("Level " + level);

    // Сбрасываем массив пользователя
    userClickedPattern = [];
    // выбираем рандомный цвет
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColor = buttonColors[randomNumber];
    // добавляем цвет в массив компьютера
    gamePattern.push(randomChosenColor); 
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

// Клик пользователя и добавление в массив
function userSlick () {
    $(".btn").click( function(event){
        var userChosenColor = event.target.id;
        // добавляем цвет в массив компьютера
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);

        checkAnswer(userClickedPattern.length - 1);
    })
};

// Звук
function playSound(name){
    var sound = new Audio("./sounds/" + name + ".mp3");
    sound.play();
}

// Анимация нажатия
function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");
    setTimeout(function() { 
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function wrong(){
    // Звук ошибки
    var wrongSound = new Audio("./sounds/wrong.mp3");
    wrongSound.play();

    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Игра окончена, начать заново");
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
