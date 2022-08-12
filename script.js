const hamb=document.querySelector("#hamb")
const popup=document.querySelector("#popup")

hamb.addEventListener("click", handHandler)

function handHandler(e){
    e.preventDefault()
    popup.classList.toggle("open")
}