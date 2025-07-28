const toggleButton = document.querySelector('.btn-toggle');;
const header = document.querySelector('.head');

toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle('open');
  header.classList.toggle('active');
});      