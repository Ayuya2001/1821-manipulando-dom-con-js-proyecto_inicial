const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (event) => taskComplete(event, id));
    return i;
}
const taskComplete = (event, id) => {
    const element = event.target
    element.classList.toggle("fas")
    element.classList.toggle("far")
    element.classList.toggle("completeIcon")
    console.log("check", id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex( item => item.id === id)
    tasks[index]["complete"] = !tasks[index]["complete"];
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export default checkComplete