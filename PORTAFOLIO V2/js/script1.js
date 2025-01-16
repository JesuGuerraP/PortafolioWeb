let menuVisible=false;
//funcion que oculta o muestra el menu

function mostrarOcultarmenu(){
  if(menuVisible){
document.getElementById("nav").classList="";
menuVisible=false;
  }else{
    document.getElementById("nav").classList="responsive";
    menuVisible=true;
  }
}

function seleccionar(){
//oculto el menu una vez que seleciono una opcion 
document.getElementById("nav").classList="";
menuVisible=false;
}

//funcion que aplica las animaciones a las habilidades
function efectoHabilidad(){
    var habilidades= document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades){
        let habilidad=document.getElementsByClassName("progreso");
       //Habilidades Tecnicas
        habilidad[0].classList.add("java")
        habilidad[1].classList.add("htmlcss")
        habilidad[2].classList.add("javaScrip")
        habilidad[3].classList.add("gestion-de-proyecto")
        habilidad[4].classList.add("git")
        habilidad[5].classList.add("worpress")
        habilidad[6].classList.add("spring")
        habilidad[7].classList.add("bd")

        //habilidades Profesionales
        habilidad[8].classList.add("comunicacion")
        habilidad[9].classList.add("trabajo-equipo")
        habilidad[10].classList.add("aprendizaje")
        habilidad[11].classList.add("resolucion-problemas")
        habilidad[12].classList.add("liderazgo")
        habilidad[13].classList.add("creatividad")

    }

}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll =function(){
    efectoHabilidad();
    


}

function descargarCV() {
   const link = document.createElement('a');
   link.href='CV Jesús Guerra.pdf';
   link.download = 'CV Jesús Guerra.pdf';
   document.body.appendChild(link);
   link.click(); 
   document.body.removeChild(link);
   }

   // script.js
document.addEventListener('DOMContentLoaded', () => {
  // Animation configurations
  const container = {
      hidden: { opacity: 0 },
      show: {
          opacity: 1,
          transition: {
              staggerChildren: 0.2,
              delayChildren: 0.5,
          },
      },
  };

  const item = {
      hidden: { opacity: 0, scale: 0.5 },
      show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
      },
  };

  // Initialize animations
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
      // Add initial animation
      card.style.opacity = '0';
      card.style.transform = 'scale(0.5)';
      
      setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.transition = 'all 0.5s ease-in-out';
      }, 500 + (index * 200));

      // Handle hover effects
      const overlay = card.querySelector('.project-overlay');
      const projectTag = card.querySelector('.project-tag');

      card.addEventListener('mouseenter', () => {
          overlay.classList.remove('hidden');
          projectTag.classList.add('hidden');
      });

      card.addEventListener('mouseleave', () => {
          overlay.classList.add('hidden');
          projectTag.classList.remove('hidden');
      });
  });

  // Handle scroll animations
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      },
      { threshold: 0.1 }
  );

  projectCards.forEach(card => {
      observer.observe(card);
  });
});