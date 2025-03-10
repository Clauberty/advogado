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

    var menuHamburguer = document.querySelector('.centralizar_menu');
    var menu =  document.querySelector('.menu');
    menu.style.display = 'flex';
    setTimeout(() => {
        menu.style.visibility = 'visible';
    }, 0001);
    setTimeout(() => {
        menu.style.height="160%";
    }, 0001);
    
    
    var x = document.createElement('div');
    menuHamburguer.appendChild(x);
    x.classList.add='fechar';
    x.style.position = 'absolute';
    x.style.width = '50px';
    x.style.height = '50px';
    x.style.background = '#000';
    x.style.left = '1em';
    x.style.top = '2em';
    x.style.cursor = 'pointer';
    x.style.opacity = '1';
   

x.addEventListener('click', function() {
    menu.style.height="0";
    setTimeout(() => {
        menu.style.display = 'none';
    }, 100);
    
    menu.style.transform = 'translateY(0)';
   x.style.display = 'none';

});

}
