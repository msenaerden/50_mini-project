const body=document.body
const slides=document.querySelectorAll('.slide')
const leftArrow=document.getElementById('left')
const rightArrow=document.getElementById('right')

let slideCount = 0


rightArrow.addEventListener('click',()=>{
    slideCount++

    if(slideCount > slides.length - 1){
        slideCount=0
    }
    setBgToBody()
    setActiveSlide()
})

leftArrow.addEventListener('click',()=>{
    slideCount--

    if(slideCount < 0){
        slideCount=slides.length-1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage=slides[slideCount].style.backgroundImage
}


function setActiveSlide() {
    slides.forEach((slide)=> slide.classList.remove('active'))

    slides[slideCount].classList.add('active')
}



