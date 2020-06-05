const buttonSeach = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const fecha = document.querySelector("#modal .header a")

buttonSeach.addEventListener("click", () => {
    modal.classList.remove("hide")
})

fecha.addEventListener("click", () => {
    modal.classList.add("hide")
})