if($(".videoGroup").width()>=1310){
    $("span.arrowRight").toggle(); 
}

$(window).resize(function() {
    $(".videoInner").css('left','0');
    $("span.arrowLeft").hide(); 
    $("span.arrowRight").show(); 

    if($(".videoGroup").width()>=1310){
        $("span.arrowRight").hide(); 
    }
});

$("span.arrowLeft").click(function(){
    let temp = 1310-$(".videoGroup").width();
    let videoWidth = "+="+temp+"px";
    $(this).toggle().siblings("span.arrowRight").toggle().siblings(".videoInner").animate({left: videoWidth});
}); 

$("span.arrowRight").click(function(){
    let temp = 1310-$(".videoGroup").width();
    let videoWidth = "-="+temp+"px";
    $(this).toggle().siblings("span.arrowLeft").toggle().siblings(".videoInner").animate({left: videoWidth});
}); 