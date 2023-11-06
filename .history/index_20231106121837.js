let openBtn = document.querySelector('.open-btn')
let menuBox=document.querySelector('.menu-box')
let closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', openMenu)
function openMenu(){
menuBox.style.display ='flex'
openBtn.style.display='none'

}