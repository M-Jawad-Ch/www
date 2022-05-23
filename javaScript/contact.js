setTimeout(pan, 1000);

function pan()
{
    const bg = document.getElementById("contact-bg");

    setTimeout( function() {
        bg.style.backgroundPosition = "bottom";
    } , 0 );

    setTimeout( function() {
        bg.style.backgroundPosition = "top";
    } , 60000 );

    setTimeout( pan, 120000 );
}