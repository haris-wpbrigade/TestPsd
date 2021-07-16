const toggleBtn = document.querySelector('.toggleBtn')
const ToggleBtnIMG = document.querySelector('.toggleBtn img')
const NavMenu = document.querySelector('.nav-bottom')

toggleBtn.addEventListener('click', () => {
    if (ToggleBtnIMG.src.match("../img/burger-icon.png")){
        NavMenu.classList.add('active')
        ToggleBtnIMG.src = "../img/menu-close-icon.png"
        document.body.style.overflow = 'hidden'
    } else {
        NavMenu.classList.remove('active')
        ToggleBtnIMG.src = "../img/burger-icon.png"
        document.body.style.overflow = 'scroll'
    }
})

const NotificationBox = document.querySelector('.notification')
const CloseBtn = document.querySelector('.close-icon')

CloseBtn.addEventListener('click', () => NotificationBox.style.display = 'none')