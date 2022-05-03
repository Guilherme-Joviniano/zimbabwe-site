const audio = document.querySelector('.audio-wrapper')
const btnArrowDown1 = document.querySelectorAll('.arrow-down')[0]
const btnArrowUp1 = document.querySelectorAll('.arrow-up')[0]
const text = []
const localText = document.querySelector('.text-history')
const localCards = document.querySelector('.card-wrapper')
console.log(localText);
addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY <= 900){
        audio.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ApfJDLibIoWL0mRZ5uOKu?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    }
    if(window.scrollY > 900){
        audio.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0mJ6uMQsIp66kvpuPTWk7f?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    }
}, true)


const cards = document.querySelectorAll('.card')

for(var i = 0; i < cards.length; ++i){
    cards[i].addEventListener("click", function(e){
        e.preventDefault
        const el = e.target
        localText.innerHTML = text[e.id]
        console.log('Adicionando o Texto' + '' + el.id)
        localCards.classList.toggle('hide')
    })
}

