function resizeContentBox() {
    if($("html").width()<=550){
        $(".videoGroup").addClass("verySmall"); 
    }else{
        $(".videoGroup").removeClass("verySmall");
    }
}

resizeContentBox();

$(window).resize(function() {
    resizeContentBox();
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
