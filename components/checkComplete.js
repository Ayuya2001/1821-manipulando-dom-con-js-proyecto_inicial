const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", taskComplete);
    return i;
}
const taskComplete = (event) => {
    const element = event.target
    element.classList.toggle("fas")
    element.classList.toggle("far")
    element.classList.toggle("completeIcon")
}

export default checkComplete