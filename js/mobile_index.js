$(window).resize(function() {
    $(".videoInner").css('left','0');
    $("span.arrowLeft").hide(); 
    $("span.arrowRight").show(); 
});

$("span.arrowLeft").click(function(){
    if($(this).siblings(".videoInner").css("left")=="-435px"){
        $(this).hide();
    }
    let videoWidth = "+=435px";
    $(this).siblings(".videoInner").animate({left: videoWidth});
    $(this).siblings("span.arrowRight").show();
}); 

$("span.arrowRight").click(function(){
    if($(this).siblings(".videoInner").css("left")=="-435px"){
        $(this).hide();
    }
    let videoWidth = "-=435px";
    $(this).siblings(".videoInner").animate({left: videoWidth});
    $(this).siblings("span.arrowLeft").show();
}); 