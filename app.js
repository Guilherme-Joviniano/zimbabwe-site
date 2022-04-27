const audio = document.querySelector('.audio-wrapper')
const btnArrowDown = document.querySelector('.arrow-down')
const btnArrowUp = document.querySelector('.arrow-up')

// window.addEventListener('scroll', changeAudioOnScroll(), true)

addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY <= 900){
        audio.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ApfJDLibIoWL0mRZ5uOKu?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    }
    if(window.scrollY > 900){
        audio.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0mJ6uMQsIp66kvpuPTWk7f?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    }
}, true)


btnArrowUp.addEventListener('click', function(){
    document.querySelector('.about').scrollIntoView();
}, false)
btnArrowDown.addEventListener('click', function(){
    document.querySelector('.politica').scrollIntoView();
}, false)
