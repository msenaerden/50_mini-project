const panels= document.querySelectorAll('.panel');

panels.forEach((eachpanel)=>{
    eachpanel.addEventListener('click', ()=> {
        removeActiveClasses()
        eachpanel.classList.add('active')

    })
    
})

function removeActiveClasses() {
    panels.forEach(otherpanel=>{
        otherpanel.classList.remove('active')
    })
    
}