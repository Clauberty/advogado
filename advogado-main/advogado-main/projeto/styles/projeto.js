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

   const offsetPercent = 15; // Porcentagem da altura da tela como offset
const offset = (window.innerHeight * offsetPercent) / 100;
const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

window.scrollTo({
    top: sectionPosition,
    behavior: "smooth"
});


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
    }, 1);
    setTimeout(() => {
        menu.style.height="160%";
    }, 1);
    
    
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
    x.style.opacity = '0';
   

x.addEventListener('click', function() {
    menu.style.height="0";
    setTimeout(() => {
        menu.style.display = 'none';
    }, 100);
    
    menu.style.transform = 'translateY(0)';
   x.style.display = 'none';

});

}
