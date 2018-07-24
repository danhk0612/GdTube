function toggleMenu() {
    let e = $('#sideBar');

    if(e.css("visibility") == 'visible'){
         e.css("visibility","hidden");
    }else if(e.css("visibility") == 'hidden'){
         e.css("visibility","");
    }
}

$("#sideMenuBtn").click(function(){
    toggleMenu();
});