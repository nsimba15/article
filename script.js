'use strict';

const icon = document.querySelector('.icon');
let share = document.querySelector('.share');

let close = function(){
    overlay.classList.add('hidden');
    imagem.classList.add('hidden');
}

icon.addEventListener('click', function(){

    share.classList.remove('hidden');
})

let imagem1 = document.querySelector('.imagem1');
let overlay  = document.querySelector('.overlay');
let imagem  = document.querySelector('.imagem');

imagem1.addEventListener('click', function(){

    overlay.classList.remove('hidden');
    imagem.classList.remove('hidden');
})

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        close();
        share.classList.add('hidden');
    }
})

overlay.addEventListener('click',close )

let botao = document.querySelector('.btn');
let content = document.querySelector('.content');

botao.addEventListener('click', function(){

    content.style.backgroundColor = 'hsl(212, 25%, 30%)';
    content.style.color = 'white';
    imagem1.src = 'avatar-michelle.jpg';
  
})

let btn = document.querySelector('.btn1');

btn.addEventListener('click', function(){

    content.style.backgroundColor = 'white';
    content.style.color = 'hsl(217, 19%, 35%) ';
    imagem1.src = 'drawers.jpg';
  
})