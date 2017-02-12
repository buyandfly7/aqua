$(document).ready(function() {
    $('#pagepiling').pagepiling({
        direction: 'horisontal',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        menu: '#nav-mobile',
        scrollingSpeed: 1600,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            'textColor': 'blue',
            'bulletsColor': '#2196F3',
            'position': 'right',
            'tooltips': ['Главная', 'Работы', 'Цена', 'Заказать']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
    });
    $('.section1').vide({
        mp4: '../assets/bg.mp4',
        poster: '../assets/img/face.jpg'
    }, {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '0% 0%', // Similar to the CSS `background-position` property.
        //  posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
        resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
        bgColor: '#00000', // Allow custom background-color for Vide div,
        className: 'video1' // Add custom CSS class to Vide div
    });
    $('.sound').click(function(e) {
        e.preventDefault();
        if ($('.sound i').hasClass('fa-volume-off')) {
            $(".video1 video").prop('muted', false); //mute
            $('.sound i').attr('class', 'fa fa-volume-up');
            Materialize.toast('Звук включен', 4000) // 4000 is the duration of the toast
        } else {
            $(".video1 video").prop('muted', true); //mute
            $('.sound i').attr('class', 'fa fa-volume-off');
            Materialize.toast('Звук выключен', 4000) // 4000 is the duration of the toast
        }
    });
    $(".button-collapse").sideNav();
});
