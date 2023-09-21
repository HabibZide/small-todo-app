// Nav Bar functionality
const navBarItems = document.querySelectorAll(".nav-bar__item");
const sectionBoxs = document.querySelectorAll(".section-parts");

// nav bar item color change when click the specific category
for (let i=0; i<navBarItems.length; i++) {
    navBarItems[i].addEventListener("click",(e)=>{
        if (e.target === navBarItems[i]) {
            navBarItems.forEach((item) => item.classList.remove("nav-bar__item--current"));
            e.target.classList.add("nav-bar__item--current");
            sectionBoxs.forEach((item)=> item.classList.add("hidden"));
            sectionBoxs[i].classList.remove("hidden");
        }
    })
}

// Dialog box functionality
const btnOpenDialog = document.querySelector(".open-dialog");

const dialogBox = document.querySelector(".dialog-box");
const overLay = document.querySelector(".overlay");

const btnCloseDialog = document.querySelector(".close-dialog");

function closeOrOpenDialogBox() {
    btnOpenDialog.classList.toggle("hidden");
    dialogBox.classList.toggle("hidden");
    overLay.classList.toggle("hidden");
}

btnOpenDialog.addEventListener("click",(e)=>{
    closeOrOpenDialogBox();
})

btnCloseDialog.addEventListener("click",(e)=>{
    closeOrOpenDialogBox();
})
overLay.addEventListener("click",(e)=>{
    closeOrOpenDialogBox();
})