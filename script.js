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

// Todo functionalities

const taskList = document.querySelector(".todolist-box");

const btnAddTodo = document.querySelector(".add-todo");
const inputWriteTodo = document.querySelector(".write-todo");

const taskArray = [];

    //Tasks adding
function createTaskElement(taskString){
    let task = document.createElement("li");
    let taskName = document.createElement("h4");
    taskName.innerText = taskString;

    let icon = document.createElement("span");
    icon.innerText = "delete"
    icon.classList.add("material-symbols-outlined")

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-todo");

    deleteBtn.appendChild(icon);

    task.appendChild(taskName);
    task.appendChild(deleteBtn);

    taskArray.push({
        name: taskString,
        element: task
    })
    
    return task;
}

function appendTask() {
   taskList.appendChild(createTaskElement(inputWriteTodo.value));
   inputWriteTodo.value = "";
}

btnAddTodo.addEventListener('click', (e)=>{
    if(inputWriteTodo.value) appendTask();
})
document.addEventListener('keydown', (e)=> {

    if (e.key === "Enter" && inputWriteTodo.value) {
        appendTask();
    }
})

    //Tasks removing
function deleteTask(taskString) {
    for (let i=0; i < taskArray.length; i++) {
        if (taskArray[i].name === taskString) {
            taskArray[i].element.remove();
            taskArray.splice(i,1);
        }
    }
}
taskList.addEventListener("click", (e)=>{
    if (e.target.parentElement.className === "delete-todo") {
        deleteTask(e.target.parentElement.parentElement.firstElementChild.innerText)
    }
})

    //Tasks seraching
const searchInput = document.querySelector(".search-todo");

searchInput.addEventListener("input",(e)=>{
    for (i of taskArray) {
        if (searchInput.value !== i.name.slice(0,searchInput.value.length)) i.element.style.display = "none";
        else i.element.style.display = "flex";
    }
    console.log(searchInput.value);
})