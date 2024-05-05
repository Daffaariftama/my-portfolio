const asideButton = document.querySelector('.fa-solid');
const aside = document.querySelector('.aside');
const  logo = document.querySelector('.fa-solid');
asideButton.addEventListener('click', function() {
  aside.classList.toggle('appear');
  logo.classList.toggle('appear-logo')
});