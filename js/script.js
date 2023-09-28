var view_percent = 40;
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var windowHeight = window.innerHeight;
    var elementVisible = windowHeight * (view_percent/100);
    var threshold = windowHeight - elementVisible
    for (var count = 0; count < reveals.length; count++) {
        var elementTop = reveals[count].getBoundingClientRect().top;
        if (elementTop < threshold) {
            reveals[count].classList.add("active");
        } else {
            reveals[count].classList.remove("active");
        }
    }

    var lines = document.getElementsByClassName('line');
    var line_height = windowHeight * (100 - view_percent)/100;
    var min_line_height = 400;
    if (line_height < min_line_height) {
        line_height = min_line_height;
    }
    for (var count = 0; count < lines.length; count++) {
        if (lines[count].classList.contains('active')) {
            lines[count].style.height = line_height.toString() + 'px';
        } else {
            if (count === lines.length - 1) {
                var last_line_height = windowHeight * (view_percent/100) 
                lines[count].style.height = last_line_height.toString() + 'px';
            } else {
                lines[count].style.height = "1px";
            }
        }
    }


    var texts = document.getElementsByClassName('text');
    var windowWidth = window.innerWidth;
    var windowArea = windowHeight * windowWidth;
    for (var count = 0; count < texts.length; count++) {
        if (count === 0) {
            var min_font_size = 50;
            var max_font_size = 200;
            var font_size = windowArea * 0.00002 * 5;
        } else if (count === 1) {
            var min_font_size = 40;
            var max_font_size = 150;
            var font_size = windowArea * 0.00001 * 3;
        } else if (count === texts.length - 1) {
            var min_font_size = 20;
            var max_font_size = 50;
            var font_size = windowArea * 0.00001 * 1;
        } else {
            var min_font_size = 30;
            var max_font_size = 100;
            var font_size = windowArea * 0.00001 * 2;
        }

        if (font_size > max_font_size) {
            font_size = max_font_size;
        } else if (font_size < min_font_size) {
            font_size = min_font_size;
        }
        if (texts[count].classList.contains('active')) {
            texts[count].style.fontSize = font_size.toString() + 'px';
        } else {
            texts[count].style.fontSize = "1px";
        }
    }
}

function revealTop() {
    var reveals = document.querySelectorAll(".reveal");
    reveals[0].classList.add("active");
    setTimeout(() => reveals[1].classList.add("active"), 500);

    var lines = document.getElementsByClassName('line');
    var windowHeight = window.innerHeight;
    var line_height = windowHeight * (100 - view_percent)/100;
    var min_line_height = 400;
    if (line_height < min_line_height) {
        line_height = min_line_height;
    }
    lines[0].style.height = line_height.toString() + 'px';

    var texts = document.getElementsByClassName('text');
    var windowWidth = window.innerWidth;
    var windowArea = windowHeight * windowWidth;
    var min_font_size = 50;
    var max_font_size = 200;
    var font_size = windowArea * 0.00002 * 5;
    if (font_size > max_font_size) {
        font_size = max_font_size;
    } else if (font_size < min_font_size) {
        font_size = min_font_size;
    }
    texts[0].style.fontSize = font_size.toString() + 'px';
}

window.addEventListener("load", revealTop);
window.addEventListener("scroll", reveal);
window.addEventListener("resize", reveal);
