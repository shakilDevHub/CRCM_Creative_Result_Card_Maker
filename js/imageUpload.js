let uploadImg = document.querySelector(".profileImgBox img");
let uploadProImgInp = document.querySelector("#uploadProImg");

uploadProImgInp.addEventListener("change", (e)=>{
    if(e.target.files.length == 0){
        return;
    }
    let imgUrl = URL.createObjectURL(e.target.files[0]);
    uploadImg.setAttribute("src", imgUrl);
})