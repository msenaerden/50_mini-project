const jokeEl=document.getElementById('joke')
const jokeBtn=document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      console.log(config)
        fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

          jokeEl.innerHTML = data.joke
        })
    }
   

    
   