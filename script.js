const nav = document.getElementById("navi-toggle");
const navLinks = document.querySelectorAll(".navigation__link");

navLinks.forEach(function (item) {
    item.addEventListener("click", function () {
        nav.checked = false;
    });
});