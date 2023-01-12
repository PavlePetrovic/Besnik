let body = document.querySelector('body')
let hamburgerIcon = document.querySelector('.mobile-menu-div')
let mobileMenuItems = document.querySelector('.mobile-menu-items')

 // Mobile menu
 hamburgerIcon.addEventListener('click', () => {
   body.classList.toggle('stop-scroll')
   mobileMenuItems.classList.toggle('open')
   
   for(let i = 0; i < 3; i++){
       hamburgerIcon.children[i].classList.toggle('open')
   }
})
mobileMenuItems.addEventListener('click', () => {
   body.classList.toggle('stop-scroll')
   mobileMenuItems.classList.toggle('open')

   for(let i = 0; i < 3; i++){
       hamburgerIcon.children[i].classList.toggle('open')
   }
})