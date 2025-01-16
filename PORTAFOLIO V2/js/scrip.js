let texto_escondido_btn =document.getElementById('texto_escondido_btn');
let texto_escondido_btn1 =document.getElementById('texto_escondido_btn1');
let texto_escondido_btn2 =document.getElementById('texto_escondido_btn2');

let texto_escondido_btn3 =document.getElementById('texto_escondido_btn3');
let texto_escondido_btn4 =document.getElementById('texto_escondido_btn4');
let texto_escondido_btn5 =document.getElementById('texto_escondido_btn5');



let texto_escondido =document.getElementById('texto_escondido');
let texto_escondido1 =document.getElementById('texto_escondido1');
let texto_escondido2 =document.getElementById('texto_escondido2');

let texto_escondido3 =document.getElementById('texto_escondido3');
let texto_escondido4 =document.getElementById('texto_escondido4');
let texto_escondido5 =document.getElementById('texto_escondido5');





texto_escondido_btn.addEventListener('click',toggleText);
texto_escondido_btn1.addEventListener('click',toggleText1);
texto_escondido_btn2.addEventListener('click',toggleText2);
texto_escondido_btn3.addEventListener('click',toggleText3);
texto_escondido_btn4.addEventListener('click',toggleText4);
texto_escondido_btn5.addEventListener('click',toggleText5);


function toggleText1()
{
  texto_escondido1.classList.toggle('mostrar');
  if(texto_escondido1.classList.contains('mostrar')){
    texto_escondido_btn1.innerHTML='Leer menos';
  }
  else{
    texto_escondido_btn1.innerHTML='Leer más';
  }

}

function toggleText(){
  texto_escondido.classList.toggle('mostrar');

  if(texto_escondido.classList.contains('mostrar')){
    texto_escondido_btn.innerHTML='Leer menos';
  }
  else{
    texto_escondido_btn.innerHTML='Leer más';
  }

  
}

function toggleText2(){
  texto_escondido2.classList.toggle('mostrar');

  if(texto_escondido2.classList.contains('mostrar')){
    texto_escondido_btn2.innerHTML='Leer menos';
  }
  else{
    texto_escondido_btn2.innerHTML='Leer más';
  }

  
}

function toggleText3(){
  texto_escondido3.classList.toggle('mostrar');

  if(texto_escondido3.classList.contains('mostrar')){
    texto_escondido_btn3.innerHTML='Leer menos';
  }
  else{
    texto_escondido_btn3.innerHTML='Leer más';
  }

  
}

function toggleText4(){
  texto_escondido4.classList.toggle('mostrar');

  if(texto_escondido4.classList.contains('mostrar')){
    texto_escondido_btn4.innerHTML='Leer menos';
  }
  else{
    texto_escondido_btn4.innerHTML='Leer más';
  }

  
}
function toggleText5(){
  texto_escondido5.classList.toggle('mostrar');

  if(texto_escondido5.classList.contains('mostrar')){
    texto_escondido_btn5.innerHTML='Leer menos';
  }
  else{
    texto_escondido_btn5.innerHTML='Leer más';
  }

  
}

