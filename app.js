window.addEventListener('scroll', function () {
    var Reimagined = document.getElementById('Reimagined');
    var Easy = document.getElementById('Easy');
    var Fun = document.getElementById('Fun');
    var Wrickcard = document.getElementById('Wrickard');

    var scrollPosition = window.scrollY;
    if (scrollPosition >= 20) {
        Reimagined.style.display = 'none';
    } else {
        Reimagined.style.display = 'block';
    }


    if (scrollPosition >= 20 && scrollPosition < 200) {
        Easy.style.display = 'block';
    } else {
        Easy.style.display = 'none';
    }


    if (scrollPosition >= 200 && scrollPosition < 300) {
        Fun.style.display = 'block';
    } else {
        Fun.style.display = 'none';
    }
    if (scrollPosition >= 300) {
        Wrickcard.style.display = 'block';
    } else {
        Wrickcard.style.display = 'none';
    }

});

document.addEventListener('DOMContentLoaded', function () {
    var GreenCard = document.getElementById('green-card');
    var PurpleCard = document.getElementById('purple-card');

    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        GreenCard.style.transform = 'rotate(' + (scrolled * -0.05) + 'deg)' ;
        PurpleCard.style.transform = 'rotate(' + (scrolled * 0.04) + 'deg)' ;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var parallaxText = document.querySelector('.parallax-text');

    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        if (scrolled >= 2400) {
            parallaxText.style.transform = 'translateX(' + (scrolled * -1 + 1900) + 'px)' + 'translateY(' + (scrolled * 1 - 2400) + 'px)';

        } else {
            parallaxText.style.transform = 'translateX(-500px)';

        }

        if (scrolled >= 3500) {
            parallaxText.style.transform = 'translateX(-1600px)' + 'translateY(1100px)';


        }
    });
});
