//
// Menu acessível via teclado
//

$(document).ready(function () {

  $.fn.accessibleDropDown = function () {
    var el = $(this);

    $('a', el).focus(function () {
      $(this).parents('li').addClass('menu-ativo');
      $(this).parents('.menu-lista').addClass('menu-aberto');
    }).blur(function () {
      $(this).parents('li').removeClass('menu-ativo');
      $(this).parents('.menu-lista').removeClass('menu-aberto');
    });
  }

  $('.nav-menu').accessibleDropDown();

});


//
// Menu móvel
//

$('.btn-menu').click(function() {
  $(this).siblings('.nav-menu').children('.menu-lista').toggleClass('_aberto');
  $(this).toggleClass('_ativo');
});


const btnSubmenu = document.querySelectorAll('._submenu span');
const temSubmenu = document.querySelectorAll('._submenu');

btnSubmenu.forEach( (botao, index) =>{
    botao.addEventListener('click', function(){
      temSubmenu.forEach( (item) => {
        item.classList.remove('submenu-ativo');
      });
      temSubmenu[index].classList.toggle('submenu-ativo');
    });
});






const principiosBtn = document.querySelectorAll('._m-swipe ul li a');
const principiosTexto = document.querySelectorAll('._container-m-swipe .__item');

principiosBtn.forEach( (item, index) => {

  item.addEventListener('click', function(e){
    
    const classe = 'ativo';
    
    e.preventDefault();

    principiosBtn.forEach( (itemRemove) => {
      itemRemove.classList.remove(`${classe}`);
    });

    principiosTexto.forEach( (itemRemove) => {
      itemRemove.classList.remove(`${classe}`);
    });

    this.classList.add(`${classe}`);
    principiosTexto[index].classList.add(`${classe}`);
  });

});



const dataAnimate = document.querySelectorAll('.js [data-animate]');
const segurancaTela = window.innerHeight * 0.7;


function animateScroll(){
  dataAnimate.forEach( (elemento) => {
    const elementoTop = elemento.getBoundingClientRect().top - segurancaTela;
    const animateClass = 'mi';

    if(elementoTop < 0){
        elemento.classList.add(`${animateClass}`);
    }
  });

}

animateScroll();

window.addEventListener('scroll', animateScroll);