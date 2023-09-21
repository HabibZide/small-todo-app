// Nav Bar functionality
const navBarItems = document.querySelectorAll(".nav-bar__item");

navBarItems.forEach((item)=>{
    // nav bar item color change when click the specific category
    item.addEventListener("click",(e)=>{
        if (e.target === item) {
            navBarItems.forEach((item) => item.classList.remove("nav-bar__item--current"));
            e.target.classList.add("nav-bar__item--current");
        }
    })
})

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