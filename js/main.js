// const menuBtn = document.querySelector(".btn-menu");
const toggleButton = document.getElementById('btn-toggle');
const header = document.getElementById('header');
const menuList = document.querySelectorAll('.menu-container__links');

hamburger.addEventListener("click", function () {
  header.classList.toggle('active');
  menuList.classList.toggle('active');
});
