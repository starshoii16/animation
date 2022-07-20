let on = document.querySelector('.checkbox.style-e input')
let header = document.querySelector('.site-header')
let storkOn = document.querySelector('.storkOn')
let stork = document.querySelector('.stork')

function scarySound(){
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = '3d.mp3';
    audio.play();
}

storkOn.onclick = scarySound

on.onchange = function () {
    if(this.checked){
    header.classList.add('site-header-bg')
    storkOn.classList.add('stork')
    storkOn.classList.add('stork-animation')
} else {
    header.classList.remove('site-header-bg')
    storkOn.classList.remove('stork')
    storkOn.classList.remove('stork-animation')
    }
}
