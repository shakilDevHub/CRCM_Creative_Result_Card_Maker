// Take ScreenShot =========================
let cgpaCalc = document.querySelectorAll(".cgpaCalc"); //when take screenshot then to hide the "CGPA Calculator" Section
let bodyScreenShot = document.body; // to add/remove overflow hidden on body
let btnHide = document.querySelectorAll(".btnHide"); //To hide some button when we want to take screenShot
let screenShotImgWrapper = document.querySelector(".screenShotImgWrapper");
let screenShotOpen = document.querySelector(".screenShotOpen");
let imgWrapper = document.querySelector(".imgWrapper");
let imgClose = document.querySelector(".imgClose");
let uploadImgBtn = document.querySelector(".uploadImgBtn");
let imgDownload = document.querySelector(".imgDownload");
let cnvs;
screenShotOpen.addEventListener("click", () => {
    // to add overflow hidden of body
    bodyScreenShot.classList.add("overflowHide");
    // To hide profile image upload button
    uploadImgBtn.classList.add("hide");
    //to show screenShot popUp
    screenShotImgWrapper.classList.add("active");
    //when take screenshot then to hide the "CGPA Calculator" Section
    cgpaCalc.forEach((element) => {
        element.classList.add("active");
    })
    //To hide some button when we want to take screenShot
    btnHide.forEach((element) => {
        element.classList.add("active");
    })
    popUp.classList.remove("active");
    html2canvas(document.querySelector(".wrapper")).then(canvas => {
        imgWrapper.innerHTML = "";
        imgWrapper.appendChild(canvas);
        canvas.style.width = "100%";
        canvas.style.hight = "100%";
        canvas.style.objectFit = "contain";
        cnvs = canvas;
    });
})
imgClose.addEventListener("click", () => {
    // to remove overflow hidden of body
    bodyScreenShot.classList.remove("overflowHide");
    // To show profile image upload button
    uploadImgBtn.classList.remove("hide");
    //to hide screenShot popUp
    screenShotImgWrapper.classList.remove("active");
    //when take screenshot then to hide the "CGPA Calculator" Section
    cgpaCalc.forEach((element) => {
        element.classList.remove("active");
    })
    //To show some button when we want to take screenShot
    btnHide.forEach((element) => {
        element.classList.remove("active");
    })
})
imgDownload.addEventListener("click", () => {
    imgDownload.href = cnvs.toDataURL();
})