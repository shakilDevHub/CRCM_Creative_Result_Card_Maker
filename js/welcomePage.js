let bodyWelcomePage = document.body; // to add/remove overflow hidden on body
let welcomePage = document.querySelector(".welcomePage"); // main Section
let welcomePageContent = welcomePage.querySelector(".content"); // content section
let openWelcomeBtn = welcomePage.querySelector(".openWelcome"); //section Button
let welcomePageCover = welcomePage.querySelector(".cover"); // welcome screen cover
// to add overflow hidden of body
bodyWelcomePage.classList.add("overflowHide");
openWelcomeBtn.addEventListener("click", () => {
    // to remove overflow hidden of body
    bodyWelcomePage.classList.remove("overflowHide");
    welcomePage.style.pointerEvents = "none";
    welcomePageContent.style.display = "none";
    welcomePage.classList.add("active");
    setTimeout(() => {
        welcomePage.style.display = "none";
    }, 700);
})