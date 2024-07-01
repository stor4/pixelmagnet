const burger = document.querySelector('.header__burger-menu')

const openBurger = () => {
  if (burger.classList.value === 'header__burger-menu burger-open') {
    burger.classList = 'header__burger-menu'
  } else {
    burger.classList = 'header__burger-menu burger-open'
  }
}

window.openBurger = openBurger
