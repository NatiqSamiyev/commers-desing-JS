let menuBtn = document.querySelector('.open-btn')
let menuBox=document.querySelector('.menu-box')

menuBtn.addEventListener('click', handleMenu)
function handleMenu(){
menuBox.style.display ='flex'
}