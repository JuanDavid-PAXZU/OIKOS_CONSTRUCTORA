$(document).ready(function(){

    /********** ELECCION FORMULARIO CONTACTO  *********/

    const mod_cnt = document.querySelectorAll(".mod_contacto");
    const mod_inf_cnt = document.querySelectorAll(".cnt_form_mod_contacto");
    const btn_volver = document.querySelectorAll(".btn_volver_contacto");


    let selectCatg = null;
    
    mod_cnt.forEach((pest) => {
       
        pest.addEventListener("click", (e) => {
            mod_cnt.forEach((el) => {
                el.classList.remove("active");
            });
            e.currentTarget.classList.toggle("active");
            
            selectCatg = pest.dataset.cat;
            
            mod_inf_cnt.forEach((infel) => {
               if(infel.dataset.cat === selectCatg){
                   infel.classList.add("active_form");
               }else{
                   infel.classList.remove("active_form");
               } 
            });
        });
        
    });

    btn_volver.forEach((volver) => {

        volver.addEventListener("click", (e) => {
            mod_inf_cnt.forEach((el) => {
                el.classList.remove("active_form");
            });
            mod_cnt.forEach((card) => {
                card.classList.add("active");
            });

        });
    });

    /************ CARRUSEL PROYECTOS **** ********/
    var swiper = new Swiper(".cnt_car_proy_dest .swiper-container", {
        slidesPerView: 1,
        breakpoints:{
            1050:{
                slidesPerView: 3,
            },
            768:{
                slidesPerView: 2,
            },
            100:{
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: ".cnt_car_proy_dest .swiper-button-next",
            prevEl: ".cnt_car_proy_dest .swiper-button-prev",
          },
    });
    /**** desplegar menu principal en movil ****/

    $('.btn_menu_movil').click(function(){
        
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.nav').removeClass('active');
        }else{
            $(this).addClass('active');
            $('.nav').addClass('active');
        }
    });

    /*********
    Aplica smaller al header con sccroll
    **********/
    $(function () {
        $('a[href*=\\#]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* FUNCION ARROWS FOOTER */

    function navFooter(){
    
        let btn = document.querySelectorAll('.col_mid_men_pie .h_cl_pie');
        let container = document.querySelectorAll('.menu_pie');
        
        $(btn).click( function(){

            if( $(this).hasClass('active') ){
                $(this).next(container).slideUp();
                $(this).removeClass('active');
            }else{
                $(container).slideUp();
                $(btn).removeClass('active');
                $(this).addClass('active');
                $(this).next().slideToggle();
            }

        });

    }

    if ($(window).width() < 768) {
        navFooter();
    }

    /* FUNCION INTERNA PROYECTOS FILTRO MOBILE */

    const btnFiltro = document.querySelector('.act_filtro_mobile');
    const containerFiltro = document.querySelector('.filtro_proyectos');

    $(btnFiltro).click(function(){
        $(containerFiltro).slideToggle().css('display', 'flex')
    })
})