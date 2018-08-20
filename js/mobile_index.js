$(window).resize(function() {
    $(".videoInner").css('left','0');
    $("span.arrowLeft").hide(); 
    $("span.arrowRight").show(); 
});

$("span.arrowLeft").click(function(){
    if($(this).siblings(".videoInner").css("left")=="-433px"){
        $(this).hide();
    }
    let videoWidth = "+=433px";
    $(this).siblings(".videoInner").animate({left: videoWidth});
    $(this).siblings("span.arrowRight").show();
}); 

$("span.arrowRight").click(function(){
    if($(this).siblings(".videoInner").css("left")=="-433px"){
        $(this).hide();
    }
    let videoWidth = "-=433px";
    $(this).siblings(".videoInner").animate({left: videoWidth});
    $(this).siblings("span.arrowLeft").show();
}); 