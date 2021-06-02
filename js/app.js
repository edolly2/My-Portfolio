// VARIABLES
const navMenu = $('.nav-menu-cont');
const navMenuExit = $('.nav-menu-exit-btn');
const navMenuEnter = $('.nav-menu-btn');
const navLink = $('.nav-link');
const aboutModal = $('.about-modal-cont');
const projectsModal = $('.projects-modal-cont');
const contactModal = $('.contact-modal-cont');
const aboutExitBtn = $('.about-exit-btn');
const projectsExitBtn = $('.projects-exit-btn');
const contactExitBtn = $('.contact-exit-btn');
const certs = $('.certs-cont');
const certsBtn = $('.certs-btn');
const gobackBtn = $('.goback-btn-cont');
const gobackBtn2 = $('.goback-btn-cont2');
const bioBtn = $('.bio-btn');
const bio = $('.bio-cont');
const popupExit = $('.popup-exit-btn');
const popup = $('.popup-cont');
const emailMeExit = $('.email-me-exit-btn');
const emailMeLink = $('.email-me-link-cont');
const writeMeCont = $('.write-me-cont');
const writeMeLinkCont = $('.write-me-link-cont');
const modal = $('.modal');
const modalExitBtn = $('.exit-btn-modal');

// FUNCTIONS
function hide(whatClick, whatHide) {
    $(whatClick).on('click', () => {
        $(whatHide).hide(500);
    });
};

function show(whatClick, whatShow) {
    $(whatClick).on('click', () => {
        $(whatShow).show(500);
    });
};

function showHide(whatClick, whatShow, whatHide) {
    $(whatClick).on('click', () => {
        $(whatShow).show(500);
        $(whatHide).hide(500);
    });
};

// JQUERY
$(document).ready(() => {
show(certsBtn, certs);
show(bioBtn, bio);
show(writeMeCont,writeMeLinkCont);

hide(popupExit, popup);
hide(emailMeExit, emailMeLink);

showHide(modalExitBtn, navMenu, modal);
showHide(gobackBtn, aboutModal, certs);

$('.skill-modals').hide();
showHide(gobackBtn2, aboutModal, bio);

    $(navMenuEnter).on('click', () => {
        $(navMenu).show(500);
        $(navMenuEnter).fadeOut(500);
    });

    $(navMenuExit).on('click', () => {
        $(navMenu).hide(500);
        $(navMenuEnter).fadeIn(500);
    });

    $(navLink).on('click', (e) => {
        $(e.currentTarget).add('.selected');
        $(e.currentTarget).css('text-decoration', 'line-through');
    });

    $(navLink).on('click', (e) => {
        $('.modal').hide(500);
        if ($(e.target).is('#about')) {
            $(aboutModal).show(500);
            $(navMenu).hide(500);
        } else if ($(e.target).is('#projects')) {
            $(projectsModal).show(500);
            $(navMenu).hide(500);
        } else if ($(e.target).is('#contact')) {
            $(contactModal).show(500);
            $(navMenu).hide(500);
        } else {
            $('.modal').hide(500);
        }
    });

    if ($(popup).css('display') == 'block') {
        $(navMenu).hide();
    }

    $('.soci1').on('mouseover', () => {
        $('.soci-title').css('color', 'yellow');
    });

    $('.soci1').on('mouseleave', () => {
        $('.soci-title').css('color', 'white');
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    $('.email-me-cont').on('click', () => {
        var email = 'edolly2@protonmail.com';
        var subject = 'Your Portfolio';
        var emailBody = 'Hi, my name is ';
        var attach = 'path';
        if (isMobile) {
            parent.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody +
                "?attach=" + attach;
        } else {
            $('.email-me-link-cont').show(500);
        }
    });

    $('.call-me-cont').on('click', () => {
        if (isMobile) {
            parent.location.href = "tel:402-708-5866";
        } else {
            $('.call-me-link-cont').show(500);
        }
    });


    

    var currentMousePos = {
        x: -1,
        y: -1
    };
    $(document).mousemove(function (event) {

        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        console.log(currentMousePos.x, currentMousePos.y);
    });

});

// VANILLA JAVASCRIPT
function onMouseOut(event) {
    if(event.clientY < 50 && window.screen.width > 768) {
        document.removeEventListener("mouseout", onMouseOut);
        document.getElementById("popup").style.display = "block";
        document.getElementById("navCont").style.display = "none";
    }
    
}
document.addEventListener("mouseout", onMouseOut);

// SLIDESHOW 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}