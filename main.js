let cusor = document.querySelector(".cusor");
let cusorFollow = document.querySelector("div.cusorFollow");
let title = document.querySelector(".title");
// let active = document.querySelector("div.active");
var w1, w2, h1, h2;

// Phần delay 1000 mili giây ở chỗ intro
window.addEventListener("load",function(){
    setTimeout(function(){
        cusor.style.opacity = 1;
        cusorFollow.style.opacity = 1;
        title.style.opacity = 1;
    },1000);
});

// Event khi trỏ chuột tới phần text
title.addEventListener("mouseenter", function () {
    // Thêm một class vào
    cusorFollow.classList.add("active");
});
title.addEventListener("mouseleave", function () {
    // Xóa một class đi 
    cusorFollow.classList.remove("active");
});

// Even di chuyển cusor
window.addEventListener("mousemove", function (e) {
    // Lấy kích thước width và height của bản thâm nó
    w1 = cusor.clientWidth / 2;
    h1 = cusor.clientHeight / 2;
    w2 = cusorFollow.clientWidth / 2;
    h2 = cusorFollow.clientHeight / 2;
    // Lấy vị trí con trỏ hiện tại
    x = e.clientX;
    y = e.clientY;
    // console.log(w2);

    // Thay đổi vị trí top left của hai thẻ cusor và cusorFollow
    cusor.style.top = (y - h1) + "px";
    cusor.style.left = (x - w1) + "px";

    cusorFollow.style.top = (y - h2) + "px";
    cusorFollow.style.left = (x - w2) + "px";

});