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
        document.body.style.overflow = 'hidden scroll'
    }
})

const NotificationBox = document.querySelector('.notification')
const CloseBtn = document.querySelector('.close-icon')

CloseBtn.addEventListener('click', () => NotificationBox.style.display = 'none')

const SearchForm = document.querySelector('.nav-form input')
const SearchBtn = document.getElementById('SearchBtn')
const CloseForm = document.getElementById('CloseBtn')

SearchForm.addEventListener('input' , ()=> {
    SearchBtn.style.display = 'none'
    CloseForm.style.display = 'block'
})

CloseForm.addEventListener('click', ()=>{
    CloseForm.style.display = 'none'
    SearchBtn.style.display = 'block'
})