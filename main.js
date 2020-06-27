"use strict"

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
    $('.project-card').on('click', function(){
        $('.fornt').css('transform', 'rotateY(180deg)');
        $('.back').css('transform', 'rotateY(360deg)');
    })
}
//////////////////////////////////////animation///////////////
let coordsTop;
function slide(idName,side ){
$(`#${idName}`).css(
    `${side}`,"0px"
    )
}
function checkCoords(){
    coordsTop = $(window).scrollTop();
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