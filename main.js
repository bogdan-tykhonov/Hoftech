"use strict"

function preloader(){
   $(".loader-wrapper").css({
    'opacity': '0'
   }); 
   setTimeout(function(){
    $(".loader-wrapper").css(
        'display','none'
       );
}, 1000)
};
setTimeout(preloader, 2000);
//////////////////paralax///////////////
function paralax(e, targetClass){
    const x = e.pageX/$(window).width();
const y = e.pageY/$(window).height();
$(`${targetClass}`).css(
    'transform',
    'translate3d(-' + x * 30 + 'px,-' + y * 30 + 'px, 0px)'
)
}
function paralax2(e, targetClass){
    const x = e.pageX/$(window).width();
const y = e.pageY/$(window).height();
$(`${targetClass}`).css(
    'transform',
    'translate3d(' + x * 60 + 'px,' + y * 60 + 'px, 0px)'
)
}

if($(window).width() >= 1200){
    $('.preview').on("mousemove",(e) =>{
        paralax(e, '.planet-1');
        paralax2(e,'.preview-text');
    });
    $('.about-company').on("mousemove",(e) =>{
        paralax(e, '.planet-2');
    });
    $('.other').on("mousemove",(e) =>{
        paralax(e, '.planet-3');
    });
}
if($(window).width() < 1200){
    $('.portfolio').on('click', function(event){
     
       if(!$(event.target).hasClass('project')) return;
        $(event.target).css('transform', 'rotateY(180deg)');
        $(event.target).parent().children('a').children('.back').css('transform', 'rotateY(360deg)');
    })
}
//////////////////////////////////////animation///////////////
let coordsTop;
function slide(idName, side){
$(`#${idName}`).css(
    `${side}`,"0px"
    )
}
function bigDeviceAnimation(){
    const blockOffset = $('.services').offset().top;
    if(coordsTop >= blockOffset-400){
       slide('skill-1', 'right');
       slide('skill-3', 'left');
       $('#skill-2').css(
           'opacity', '1'
       )
        clearInterval(coordsInterval);
       }
}
function smallDeviceAnimation(){
    let rightBlock = $('#skill-3').offset().top;
    let leftBlock = $('#skill-1').offset().top;
    let centerBlock = $('#skill-2').offset().top;
    
    if(coordsTop >= leftBlock - 600){
      slide('skill-1', 'right');
    
    };
    if(coordsTop >= rightBlock - 600){
      slide('skill-3', 'left');
      clearInterval(coordsInterval);
    };
    if(coordsTop >= centerBlock - 600){
      $('#skill-2').css(
          'opacity', '1'
      );
    };
}
function checkCoords(){
    coordsTop = $(window).scrollTop();
  if($(window).width() > 1050){
   bigDeviceAnimation();
  }else{
  smallDeviceAnimation();
  }
}
const coordsInterval =  setInterval(checkCoords, 100);
//////////////////////slowlyNav//////////////
$("nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = ($(id).offset().top)-150;
    $('body,html').animate({scrollTop: top}, 1500);
});
$('.logo').on('click', function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
})
///////////////////////////small nav//////////////////
$('.gamburg').on('click', function(){
    if( $('.gamburg ul').hasClass('active-gamburg')){
        $('.gamburg ul').removeClass('active-gamburg');
        $('.gamburg i').css('color', '');
    }else{
    $('.gamburg ul').addClass('active-gamburg');
    $('.gamburg i').css('color', '#DD3471')
    }
})
////////////////////////////////popup////////////////
$('.popup').on('click', function(){
    $('.popup-wrapper').css('display','flex');
    $('.popup-form').css('display','block');
    $('form').addClass('active-popup');
})
$('.popup-wrapper').on('click', function(event){
 let target = $(event.target)
    if(target.hasClass('popup-wrapper')){
        $('.popup-wrapper').css('display','none');
        $('.popup-form').css('display','none');
        $('form').removeClass('active-popup');
    }
    else return;
})
$('.popup-form i').on('click', function(){
    $('.popup-wrapper').css('display','none');
    $('.popup-form').css('display','none');
    $('form').removeClass('active-popup');
})