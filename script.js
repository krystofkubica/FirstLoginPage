const loginPage = document.querySelector('.loginpage');

loginPage.animate([
  { opacity: 0, transform: 'scale(0.5)' },
  { opacity: 1, transform: 'scale(1)' }
], {
  duration: 1200,
  easing: 'ease-in-out'
});
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

