const menuBtnEl = document.getElementById('hamburger-btn')
const mobileMenu = document.getElementById('menu')
const mobileLogo = document.getElementById('logo')

menuBtnEl.addEventListener('click', () => {
    menuBtnEl.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('opacity')
    mobileMenu.classList.toggle('hidden')
    
   
})



/* close Menu on link click */

const menuLink = document.querySelectorAll('.menu-link')
var linkLength = menuLink.length


    for(let i=0; i < linkLength; i++) {
        menuLink[i].addEventListener('click', () => {
            mobileMenu.classList.toggle('flex')
            mobileMenu.classList.toggle('opacity')
            menuBtnEl.classList.toggle('open')
        })

    }



const navigationHeight = document.querySelector('.nav-links').offsetHeight

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + 'px')