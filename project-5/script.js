const bg= document.querySelector('.bg')
const loading=document.querySelector('.loading')


let percantage=0;

let int = setInterval(blur, 30)

function blur() {
    percantage++

    if(percantage>100){
        clearInterval(Int);
    }

    loading.innerText = `${percantage}%`
    loading.style.opacity= scale (percantage, 0, 100, 1, 0)
    bg.style.opacity=scale(percantage, 0, 100, 0, 1)



}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}