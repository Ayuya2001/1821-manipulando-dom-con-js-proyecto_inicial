import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
const btn = document.querySelector("[data-form-btn]")

const createTask =  (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = ""
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete())
    const titleTask = document.createElement("span");
    titleTask.classList.add("task")
    titleTask.innerText = value;
    taskContent.appendChild(titleTask)
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.appendChild(taskContent)
    list.appendChild(task)
    task.appendChild(deleteIcon())
}
btn.addEventListener("click", createTask);