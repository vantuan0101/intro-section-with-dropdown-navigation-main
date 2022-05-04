
const menuClose = document.querySelector('.header__menu-img');
const navBar = document.querySelector('.header__nav');
const modalNav = document.querySelector('.modal__nav')
const authNav = document.querySelectorAll('.auth__submit')


menuClose.classList.contains('active') ? menuClose.classList.remove('active') : ''

menuClose.addEventListener('click',()=>{
    menuClose.classList.toggle('active')
    if(menuClose.classList.contains('active')){
        menuClose.setAttribute('src','./images/icon-close-menu.svg')

        navBar.style.right = "0";
        navBar.style.opacity = '1'
        navBar.style.display = 'block'

        modalNav.style.opacity = '0.4'
        modalNav.style.display = 'block'

        authNav.forEach((item)=>{

            item.style.display = 'block'
        })

    }else{
        menuClose.setAttribute('src','./images/icon-menu.svg')

        navBar.style.right = "-200px";
        navBar.style.opacity = '0'
        navBar.style.display = 'none'
        
        modalNav.style.opacity = '0'
        modalNav.style.display = 'none'

        authNav.forEach((item) => {

            item.style.display = 'none'
        })

    }
})
