if (screen.width <= 700) {
    let pageName = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
    window.location = "./m/"+pageName;
}