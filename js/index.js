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


function toggleMenu() {
    let e = $('#sideBar');
    let e2 = $('#contents');

    if ($("html").width() <= 1023) {
        e.toggleClass("forSmall show-for-large").css("visibility", "");
        e2.toggleClass("blurBox");
    } else {
        if (e.css("visibility") == 'visible') {
            e.css("visibility", "hidden");
        } else if (e.css("visibility") == 'hidden') {
            e.css("visibility", "");
        }
    }
}

$(window).resize(function() {
    let e = $('#sideBar');
    let e2 = $('#contents');

    if($(".videoGroup").width()>1023){
        e.removeClass("forSmall").addClass("show-for-large");
        e2.removeClass("blurBox");
    }
});

$("#sideMenuBtn").click(function () {
    toggleMenu();
});