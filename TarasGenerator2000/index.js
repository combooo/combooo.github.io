var buttonCollection = document.querySelectorAll(".drum");

for (var i = 0; i < buttonCollection.length; i++) {
    buttonCollection[i].addEventListener("click", function() {
        var audioClick = this.innerHTML;
        drumChooser(audioClick);
        pressIcon(audioClick);
    })
}

document.addEventListener("keydown", function(event) {
    drumChooser(event.key);
    pressIcon(event.key)
})


function drumChooser(keyName) {
    switch (keyName) {
        case "w":
            var audio = new Audio("./sounds/polubilaparnya.ogg")
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/happybirthday.ogg")
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/pabapam.ogg")
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/ebaniyvrot.ogg")
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/kakdela.ogg")
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/eie.ogg")
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/pesnupodstolom.ogg")
            audio.play();
            break;
        default: break;
    }
}

function pressIcon(value) {
    var activeButton = document.querySelector("." + value);

    activeButton.classList.add("pressed");
    setTimeout(function() { 
        activeButton.classList.remove("pressed");
    }, 100);
}