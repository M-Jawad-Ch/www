var list = 
[
    "Welcome", "السلام عليكم", "Grüß Gott", "Zdraveite", "Hola", "Hafa adai",
    "Nǐ hǎo", "Dobar dan", "hyvää päivää", "Guten tag", "Yasou", "Shalom", 
    "Selamat siang", "Konnichiwa", "Bonġu", "Zdravstvuyte", "Hallå", "Sawasdee"
];

var index = -1;

slideShow()

function slideShow()
{
    const slide = document.getElementById("slide");
    const text = document.getElementById("mainTxt");

    setTimeout( function() {
        text.innerText = list[index];
        text.style.opacity = 1;
    } , 0 );

    setTimeout( function() {
        text.style.opacity = 0;
    } , 3000 );

    index++;

    if ( index == list.length ) index = 0;

    setTimeout(slideShow, 3500);
}