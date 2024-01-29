const menuLink = document.querySelectorAll('.nav__link')
const menuBtn = document.querySelector('.header__btn')
const menu = document.querySelector('.nav')

const showMenu = () => {
  menu.classList.toggle('active-menu')
  menuBtn.classList.toggle('active-btn')
}

const hideMenu = () => {
  menu.classList.remove('active-menu')
  menuBtn.classList.remove('active-btn')
}

menuBtn.addEventListener('click', showMenu)
menuLink.forEach((l) => {
  l.addEventListener('click', hideMenu)
})