let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('section')
window.addEventListener('scroll', ( ) => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id')

    }) 
})
function scrollSection(event){
    event.preventDefault();
    

    const href = event.currentTarget.getAttribute('href');
     console.log(href)
    const section = document.querySelector(href);

   let topSection = section.offsetTop;

   window.scrollTo({
    top: topSection,
    behavior: 'smooth'
   })

}


links.forEach(link => {
link.addEventListener('click', scrollSection)
})

/* menu hamburguer */

function barramenu(){
    var primeiraLinha = document.getElementsByClassName('hamburguer')[0];
    var ultimaLinha = document.getElementsByClassName('hamburguer')[1];
    
    primeiraLinha.style.transform = "rotate(135deg)";
    ultimaLinha.style.transform = "rotate(-135deg)";
   

    var menu =  document.querySelector('.menu');
    menu.style.visibility = 'visible';
     menu.style.height = "300px";
     var menuHamburguer = document.querySelector('.centralizar_menu');
     var x = document.createElement('div');
   menuHamburguer.appendChild(x);
   x.classList.add='fechar';
   x.style.position = 'absolute';
   x.style.width = '30px';
   x.style.height = '30px';
   x.style.background = '#000';
   x.style.left = '1.6em';
   x.style.top = '2em';
x.style.cursor = 'pointer';

x.style.opacity = '0';
 
x.addEventListener('click', function() {
   
   menu.style.visibility = 'hidden';   
  x.style.display ='none';
   menu.style.height = "0"
});

};
