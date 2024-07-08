const list = document.querySelector('.projectsCategory__list')
const btn = document.querySelector('.projectsCategory__btn')

const openList = (item) => {
  if (list.classList.value === 'projectsCategory__list projectsCategory__open') {
    list.classList = 'projectsCategory__list'
    btn.classList = 'projectsCategory__btn'
    btn.textContent = item.innerText
  } else {
    list.classList = 'projectsCategory__list projectsCategory__open'
    btn.classList = 'projectsCategory__btn projectsCategory__open-btn'
  }
}

window.openList = openList
