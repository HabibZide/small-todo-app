const navBarItems = document.querySelectorAll(".nav-bar__item");

// Nav Bar functionality
navBarItems.forEach((item)=>{
    // nav bar item color change when click the specific category
    item.addEventListener("click",(e)=>{
        if (e.target === item) {
            navBarItems.forEach((item) => item.classList.remove("nav-bar__item--current"));
            e.target.classList.add("nav-bar__item--current");
        }
    })
})