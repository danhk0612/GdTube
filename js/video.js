function resizeVideo() {
    let v = $("#contents").width();
    $("#recentVideo").attr('width', v).attr('height',v/2);
    $("#commentList textarea").css('width', v-50);
}


$("#sideBar").hide();
resizeVideo();

function toggleMenu() {
    let e = $('#sideBar');
    let e2 = $('#contents');
    let e3 = $('#recommenList');

    e.toggle().toggleClass("forSmall show-for-large").css("visibility", "");
    e2.toggleClass("blurBox");
    e3.toggleClass("blurBox");

}

$(window).resize(function () {
    resizeVideo();
});

$("#sideMenuBtn").click(function () {
    toggleMenu();
});

var getParameters = function (paramName) {
    // 리턴값을 위한 변수 선언
    var returnValue;

    // 현재 URL 가져오기
    var url = location.href;

    // get 파라미터 값을 가져올 수 있는 ? 를 기점으로 slice 한 후 split 으로 나눔
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');

    // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
    for (var i = 0; i < parameters.length; i++) {
        var varName = parameters[i].split('=')[0];
        if (varName.toUpperCase() == paramName.toUpperCase()) {
            returnValue = parameters[i].split('=')[1];
            return decodeURIComponent(returnValue);
        }
    }
};

let videoUrl = "https://www.youtube.com/embed/" + getParameters('v');
$("#recentVideo").attr("src", videoUrl).attr('src', function (i, val) {
    return val;
});