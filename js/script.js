const view_percent = 40;
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = windowHeight * (view_percent/100);
    const threshold = windowHeight - elementVisible
    for (let count = 0; count < reveals.length; count++) {
        const elementTop = reveals[count].getBoundingClientRect().top;
        if (elementTop < threshold) {
            reveals[count].classList.add("active");
        } else {
            reveals[count].classList.remove("active");
        }
    }

    const lines = document.getElementsByClassName('line');
    let line_height = windowHeight * (100 - view_percent)/100;
    const min_line_height = 400;
    if (line_height < min_line_height) {
        line_height = min_line_height;
    }
    for (let count = 0; count < lines.length; count++) {
        if (lines[count].classList.contains('active')) {
            lines[count].style.height = line_height.toString() + 'px';
        } else {
            if (count === lines.length - 1) {
                const last_line_height = windowHeight * (view_percent/100) 
                lines[count].style.height = last_line_height.toString() + 'px';
            } else {
                lines[count].style.height = "1px";
            }
        }
    }


    const texts = document.getElementsByClassName('text');
    const windowWidth = window.innerWidth;
    const windowArea = windowHeight * windowWidth;
    let min_font_size = 50;
    let max_font_size = 200;
    let font_size = windowArea * 0.00002 * 5;
    for (let count = 0; count < texts.length; count++) {
        if (count === 0) {
            min_font_size = 50;
            max_font_size = 200;
            font_size = windowArea * 0.00002 * 5;
        } else if (count === 1) {
            min_font_size = 40;
            max_font_size = 150;
            font_size = windowArea * 0.00001 * 3;
        } else if (count === texts.length - 1) {
            min_font_size = 20;
            max_font_size = 50;
            font_size = windowArea * 0.00001 * 1;
        } else {
            min_font_size = 30;
            max_font_size = 100;
            font_size = windowArea * 0.00001 * 2;
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
    const reveals = document.querySelectorAll(".reveal");
    reveals[0].classList.add("active");
    setTimeout(() => reveals[1].classList.add("active"), 500);

    const lines = document.getElementsByClassName('line');
    const windowHeight = window.innerHeight;
    let line_height = windowHeight * (100 - view_percent)/100;
    const min_line_height = 400;
    if (line_height < min_line_height) {
        line_height = min_line_height;
    }
    lines[0].style.height = line_height.toString() + 'px';

    const texts = document.getElementsByClassName('text');
    const windowWidth = window.innerWidth;
    const windowArea = windowHeight * windowWidth;
    const min_font_size = 50;
    const max_font_size = 200;
    let font_size = windowArea * 0.00002 * 5;
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
