export default (date) => {
    const dateElment = document.createElement("li");
    dateElment.classList.add("date")
    dateElment.innerHTML = date
    return dateElment
}