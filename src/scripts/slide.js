const menuToggle = document.querySelector('.menu-toggle');
const navElement = document.querySelector('nav ul');
const heroElement = document.querySelector('.hero');

const mainElement = document.querySelector('main');

menuToggle.addEventListener('click', () => {
  event.preventDefault();
  navElement.classList.toggle('slide');
});

mainElement.addEventListener('click', () => {
  navElement.classList.remove('slide');
});

heroElement.addEventListener('click', () => {
  navElement.classList.remove('slide');
});
