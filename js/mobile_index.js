function resizeContentBox() {
    if($("html").width()<=600){
        $(".videoGroup").addClass("verySmall"); 
    }else{
        $(".videoGroup").removeClass("verySmall");
    }
}

resizeContentBox();

$(window).resize(function() {
    $(".videoInner").css('left','0');
    $("span.arrowLeft").hide(); 
    $("span.arrowRight").show(); 
    resizeContentBox();
});

$("span.arrowLeft").click(function(){
    if($(this).siblings(".videoInner").css("left")=="-436px"){
        $(this).hide();
    }
    let videoWidth = "+=436px";
    $(this).siblings(".videoInner").animate({left: videoWidth});
    $(this).siblings("span.arrowRight").show();
}); 

$("span.arrowRight").click(function(){
    if($(this).siblings(".videoInner").css("left")=="-436px"){
        $(this).hide();
    }
    let videoWidth = "-=436px";
    $(this).siblings(".videoInner").animate({left: videoWidth});
    $(this).siblings("span.arrowLeft").show();
}); 


function toggleMenu() {
    let e = $('#sideBar');
    let e2 = $('#contents');

    e.toggleClass("forSmall show-for-large").css("visibility", "");
    e2.toggleClass("blurBox");

}

function toggleSearchBar() {
    let e = $('#searchBar');
    let e2 = $('#logoBox');
    let e3 = $('#menuBox');

    e.toggle();
    e2.toggle();
    e3.toggle();

    $("#searchBar input").focus();
}

$("#sideMenuBtn").click(function () {
    toggleMenu();
});

$("#searchBtn").click(function () {
    toggleSearchBar();
});

$("#returnSearchBarBtn").click(function () {
    toggleSearchBar();
});
