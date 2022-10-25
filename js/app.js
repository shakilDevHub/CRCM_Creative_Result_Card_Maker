// ==================================
// Prevent Default Behaviour of submit button
// ===================================
let submitBtn = document.querySelectorAll("form button");
console.log(submitBtn)
submitBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
    })
})
// ==================================
// ===================================


// Primary DOM selection for input values======================

let body = document.body; // to add/remove overflow hidden on body
let subName = document.querySelector("#subName");
let cgpa = document.querySelector("#cgpa");
let credit = document.querySelector("#credit");
let addBtn = document.querySelector(".addBtn");
let subjectDetails = document.querySelector(".subjectDetails");
let details = document.querySelectorAll(".details");
let countCgpa = document.querySelector(".countCgpa");
let yourPoint = document.querySelector(".yourPoint");

let totalCredit = 0;
let totalCgpaWithCredit = 0;

// Initialy set empty so that after reload it look empty
subName.value = "";
cgpa.value = "";
credit.value = "";

// Taking a empty array for stroing subject name\
// to detect repetation of subject name
let subNameArr = [];



// Grade Finder================== 
let gradeCheck = (cgpaV) => {
    if (cgpaV > 4 || cgpaV < 0) {
        return "wrong inputs";
    } else if (cgpaV == 4) {
        return "A+";
    } else if (cgpaV >= 3.75) {
        return "A";
    } else if (cgpaV >= 3.5) {
        return "A-";
    } else if (cgpaV >= 3.25) {
        return "B+";
    } else if (cgpaV >= 3) {
        return "B";
    } else if (cgpaV >= 2.75) {
        return "B-";
    } else if (cgpaV >= 2.5) {
        return "C+";
    } else if (cgpaV >= 2.0) {
        return "C";
    } else if (cgpaV >= 2.75) {
        return "D";
    } else {
        return "F";
    }
}


// eventlistener for Add button==================
addBtn.addEventListener("click", (e) => {
    if (subName.value == "" || cgpa.value == "" || credit.value == "" || !isNaN(Number(subName.value)) || isNaN(Number(cgpa.value)) || Number(cgpa.value) > 4 || Number(cgpa.value) < 0 || Number(isNaN(credit.value))) {
        alert("Please Complete All Inputs");
    } else {
        let gradeDis = gradeCheck(cgpa.value);
        // if the subject name already exist then show this alert=========
        if (subNameArr.includes(subName.value)) {
            alert("This subject is already inserted");
        } else {
            subNameArr.push(subName.value);
            // Creating DOM element start============
            let details = document.createElement("div");
            details.classList.add("details");

            details.innerHTML = `
                <p>${(subName.value).toLowerCase()}</p>
                <p >${cgpa.value}</p>
                <p>${credit.value}</p>
                <p>${gradeDis}</p>
            `;
            totalCredit += Number(credit.value);
            totalCgpaWithCredit += Number(cgpa.value) * Number(credit.value);
            subjectDetails.appendChild(details);
            subName.value = "";
            cgpa.value = "";
            credit.value = "";
            // Creating DOM element end============
        }
    }
})

// DOM selection for popup================
let close = document.querySelector(".close");
let popUp = document.querySelector(".popUp");
let result = document.querySelector(".result");

// Count CGPA event listener (PopUp Open)==============
countCgpa.addEventListener("click", () => {
    // to add overflow hidden of body
    body.classList.add("overflowHide");
    console.log(`totalCredit = ${totalCredit}`);
    console.log(`totalCgpaWithCredit = ${totalCgpaWithCredit}`);
    popUp.classList.add("active");

    let totalCgpa = (totalCgpaWithCredit / totalCredit).toPrecision(3);
    // course details selecton
    let details = document.querySelectorAll(".details");

    let popUpGradeTemp = gradeCheck(totalCgpa);

    // To show the totall poin in {POPUP} in dynamic
    if (details.length > 1) {
        result.innerHTML = `
            <h3>Your CGPA = ${totalCgpa}</h3>
            <h2>${popUpGradeTemp}</h2>
            `;
    } else {
        result.innerHTML = `
        <h3>You didn't enter any course details</h2></h3>
        `;
    }

    if (details.length > 1) {
        yourPoint.innerHTML = `
        <h2>your poin <b>${totalCgpa}</b></h2>
        <h2><b>${popUpGradeTemp}</b></h2>
        `;
    } else {
        yourPoint.innerHTML = `
            <h2>You didn't enter any course details</h2>`;
    }
    yourPoint.classList.add("active");
});
// Count CGPA event listener (PopUp Close)==============
close.addEventListener("click", () => {
    // to remove overflow hidden of body
    body.classList.remove("overflowHide");
    popUp.classList.remove("active");
    yourPoint.classList.remove("active");
});