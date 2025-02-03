// const menuBtn = document.querySelector(".btn-menu");
const hamburger = document.getElementById('hamburger-menu');
const header = document.getElementById('header');
// const links = document.querySelectorAll('.menu-link');

hamburger.addEventListener("click", function () {
  header.classList.toggle('active');
  // menuList.classList.toggle('menu-container__links');
});
