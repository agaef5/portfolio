document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function(){
    const loading_screen = document.querySelector(".loading_screen");
    loading_screen.classList.toggle("loading_screen_hidden")
}, 900)
});

document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({});
});

var color;
var color_transparent;
var bg = document.getElementsByClassName("project_description");
var bg2 = document.getElementsByClassName("hero_text");



function ChangeSVGColor() {
    var illustrations = document.getElementsByClassName("illustration");
    var rects = document.getElementsByClassName("rect_class");

    for (var i = 0; i < illustrations.length; i++) {
        var svg = illustrations[i];

        var paths = svg.querySelectorAll("path");
        var groups = svg.querySelectorAll("g");

        //change all colors in <path></path> tags
        for (var j = 0; j < paths.length; j++) {
            paths[j].setAttribute("fill", color);
            paths[j].setAttribute("stroke", color);
        }

        //change all colors in <g></g> tags
        for (var k = 0; k < groups.length; k++) {
            groups[k].setAttribute("fill", color);
        }

        for (var l = 0; l < rects.length; l++) {
            rects[l].setAttribute("fill", color);
        }
        
    }
};

function ChangeBgColor() {
    for (var i=0; i < bg.length; i++) {
        bg[i].style.backgroundColor = color_transparent;

    };

    for (var j=0; j < bg2.length; j++) {
        bg2[j].style.backgroundColor = color_transparent;

    };
 };

document.addEventListener("DOMContentLoaded", function detectSystemTheme() {
    var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = document.body;

    if (prefersDarkMode) {
        theme.classList.add("dark");
        theme.classList.remove("light");
        color = "#f1e9d2b4"; 
        color_transparent = "#858074cb";
    } else {
        theme.classList.add("light");
        theme.classList.remove("dark");
        color = "#373534";
        color_transparent = "#373534c4";
    }
    console.log(color, color_transparent)
    ChangeSVGColor()
    ChangeBgColor()
    
});

function SwitchTheme() {
    var theme = document.body;
   
    if(theme.classList.contains("light")){
        theme.classList.add("dark");
        theme.classList.remove("light");
        color = "#f1e9d2b4"
        color_transparent = "#858074cb"

    } else if(theme.classList.contains("dark")){
        theme.classList.add("light");
        theme.classList.remove("dark");
        color = "#373534";
        color_transparent = "#373534c4";
    };
        ChangeSVGColor();
        ChangeBgColor();
};



var open_section = document.querySelector('.about_me_toggle');
var show_paragraph = document.querySelectorAll('.hidden-paragraph');
var arrow = document.querySelector('.rotate_arrow');

function openAndClose() {
    open_section.classList.toggle('active');
    arrow.classList.toggle('turn_around')

    for (var l = 0; l < show_paragraph.length; l++) {
        show_paragraph[l].classList.toggle('show');
    }
};

//centering divs for
const centeredDivs = document.querySelectorAll('.skill_description');
centeredDivs.forEach((div) => {

    const divWidth = div.offsetWidth;
    const divHeight = div.offsetHeight;
    
    div.style.top = `calc(50% - ${divHeight / 2}px)`;
    div.style.left = `calc(50% - ${divWidth / 2}px)`;
});

function openGoodReads() {
    // Define the Goodreads URL
    var goodreadsUrl = "https://www.goodreads.com/user/show/160780355-agnieszka-furgalska";

    // Open a new window or tab with the Goodreads URL
    window.open(goodreadsUrl);
}