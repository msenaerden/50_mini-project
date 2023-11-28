const cards=document.querySelectorAll('.card')
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerpoint= window.innerHeight/5*4

    cards.forEach(card =>{
        const carTop= card.getBoundingClientRect().top

        if(carTop<triggerpoint){
            card.classList.add('show')
        }else{
            card.classList.remove('show')
        }
    })

}