const hamburgerIcon = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerIcon.addEventListener("click",toggleNav)

function toggleNav(){
    hamburgerIcon.classList.toggle("active")
    navigation.classList.toggle("active")
}