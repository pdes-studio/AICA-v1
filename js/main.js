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
