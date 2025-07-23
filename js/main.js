const toggleButton = document.querySelector('.btn-toggle');;
const header = document.querySelector('.head');
const menuList = document.querySelectorAll('.menu-container__links');

toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle('open');
  header.classList.toggle('active');
});
