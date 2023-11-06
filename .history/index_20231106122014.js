let openBtn = document.querySelector('.open-btn')
let menuBox=document.querySelector('.menu-box')
let closeBtn = document.querySelector('.close-btn')
// open menu bar
openBtn.addEventListener('click', openMenu)
function openMenu(){
menuBox.style.display ='flex'
openBtn.style.display='none'
closeBtn.style.display='block'

}

// close menu bar
closeBtn.addEventListener('click', closeMenu)
function closeMenu(){
    menuBox.style.display='none'
    closeBtn.style.display='none'
    openBtn.style.display=''
}