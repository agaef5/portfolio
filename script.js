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

function SwitchTheme() {
    var theme = document.body;
   
    if(theme.classList.contains("light")){
        theme.classList.add("dark");
        theme.classList.remove("light");
        color = "#f1e9d2b4"
        ChangeSVGColor();
    } else if(theme.classList.contains("dark")){
        theme.classList.add("light");
        theme.classList.remove("dark");
        color = "#373534"
        ChangeSVGColor();
    };

}

function ChangeSVGColor() {
    var illustrations = document.getElementsByClassName("illustration");

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
        
    }
}


var open_section = document.querySelector('.about_me_toggle');
var show_paragraph = document.querySelectorAll('.hidden-paragraph');
var arrow = document.querySelector('.rotate_arrow');

function openAndClose() {
    open_section.classList.toggle('active');
    arrow.classList.toggle('turn_around')

    for (var l = 0; l < show_paragraph.length; l++) {
        show_paragraph[l].classList.toggle('show');
    }
}



