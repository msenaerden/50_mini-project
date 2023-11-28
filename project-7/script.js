const container=document.querySelector('.container')
const splitLeft=document.querySelector('.left')
const splitRight=document.querySelector('.right')

splitLeft.addEventListener('mouseenter', ()=>
container.classList.add('leftside'))
splitLeft.addEventListener('mouseleave', ()=>
container.classList.remove('leftside'))

splitRight.addEventListener('mouseenter', ()=>
container.classList.add('rightside'))
splitRight.addEventListener('mouseleave', ()=>
container.classList.remove('rightside'))