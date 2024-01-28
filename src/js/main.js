const menuBtn = document.querySelector('.header__btn')
const menu = document.querySelector('.nav')

const showMenu = () => {
  menu.classList.toggle('active-menu')
  menuBtn.classList.toggle('active-btn')
}

menuBtn.addEventListener('click', showMenu)