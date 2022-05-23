var list = 
[
    "WELCOME", "مرحبا", "こんにちは", "你好",
    "Привет", "Hallo", "Xin chào", "สวัสดี", "여보세요",
    "שלום"
];

var index = -1;

slideShow()

function slideShow()
{
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