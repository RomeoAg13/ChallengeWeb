document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.querySelector(".nav-toggler");
    const closeNavBtn = document.querySelector("#close-nav");
    const navigation = document.querySelector("nav");

    burgerIcon.addEventListener("click", toggleNav);
    closeNavBtn.addEventListener("click", closeNav);

    function toggleNav() {
        burgerIcon.classList.toggle("active");
        navigation.classList.toggle("active");
    }

    function closeNav() {
        burgerIcon.classList.remove("active");
        navigation.classList.remove("active");
    }
});
