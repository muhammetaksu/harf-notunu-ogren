let examGrade = prompt("Puaninizi Giriniz:");
// let cardText = document.getElementById("card-text");
let textInfo;

const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`;

const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`;

const ARROW = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`;

let info = document.getElementById("card-text");

if (examGrade >= 0 && examGrade <= 100) {
    textInfo = SMILE;
    info.classList.add("text-primary");
    if (examGrade >= 1 && examGrade <= 49) {
        textInfo = `${FROWN} FF ${ARROW}`;
        info.classList.replace("text-primary", "text-danger");
    } else if (examGrade >= 50 && examGrade <= 59) {
        textInfo += " FD";
    } else if (examGrade >= 60 && examGrade <= 64) {
        textInfo += " DD";
    } else if (examGrade >= 65 && examGrade <= 69) {
        textInfo += " DC";
    } else if (examGrade >= 70 && examGrade <= 74) {
        textInfo += " CC";
    } else if (examGrade >= 75 && examGrade <= 79) {
        textInfo += " CB";
    } else if (examGrade >= 80 && examGrade <= 84) {
        textInfo += " BB";
    } else if (examGrade >= 85 && examGrade <= 89) {
        textInfo += " BA";
    } else if (examGrade >= 90 && examGrade <= 100) {
        textInfo += " AA";
    }
} else {
    info.classList.add("text-secondary");
    textInfo = "Hatalı Giriş Yaptınız.";
}
info.innerHTML = `${textInfo} ${ARROW} ${examGrade}`;

if (examGrade == 0 || examGrade == null) {
    textInfo = "Lütfen Bir Sayı Giriniz";
    info.classList.replace("text-primary", "text-black");
}

info.innerHTML = `${textInfo} ${examGrade}`;
