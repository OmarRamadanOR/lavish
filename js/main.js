const TypingWritter = document.querySelector(".auto-text");

let career = ["DESIGNER & DEVELOPER", "Front End", "Ui/Ux"];

let indexArray = 0;
let characterIndex = 0;

updateText();
function updateText() {
    characterIndex++;
    TypingWritter.innerHTML = `${career[indexArray].slice(0, characterIndex)}`;

    if (characterIndex === career[indexArray].length) {
        indexArray++;
        characterIndex=0
    }

    if (indexArray === career.length) {
        indexArray = 0;
    }
    setTimeout(updateText,200)
}


//Btn Up

let btnUp = document.getElementById("btn-up");

window.onscroll = () => {
    if (window.scrollY >= 600) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
}
btnUp.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    })
}