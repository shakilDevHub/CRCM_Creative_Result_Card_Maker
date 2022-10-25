// Basic info DOM selection ======================
let basicInfo = document.querySelectorAll(".basicInfo .inputBox input");
let basicInfoBtn = document.querySelector(".basicInfo .basicInfoBtn");

basicInfo.forEach((element) => {
    element.value = "";
})
basicInfoBtn.addEventListener("click", () => {
    let i = 0;
    basicInfo.forEach((element, index) => {
        if (index == 0 || index == 1 || index == 3) {
            if (!isNaN(Number(element.value)) && i < 1) {
                i++;
                alert("Please Enter Proper Information");
            }
        } else if (index == 5 || index == 6) {
            if (isNaN(Number(element.value)) && i < 1) {
                i++;
                alert("Please Enter Proper Information");
            }
        }
    })
})