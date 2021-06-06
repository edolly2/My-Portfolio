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
const pcCertsExitBtn = $('.pc-certs-exit-btn-cont');
const certs = $('.certs-cont');
const mobileCertsExitBtn = $('.mobile-certs-exit-btn-cont');
const certsMobile = $('.certs-mobile-cont');
const certsBtn = $('.certs-btn');
const bioExitBtn = $('.bio-exit-btn-cont');
const bioBtn = $('.bio-btn');
const bio = $('.bio-cont');
const popupExit = $('.popup-exit-btn');
const popup = $('.popup-cont');
const emailMeExit = $('.email-me-exit-btn');
const emailMeLink = $('.email-me-link-cont');
const writeMeCont = $('.write-me-cont');
const writeMeLinkCont = $('.write-me-link-cont');
const callMeCont = $('.call-me-cont');
const callMeExitBtn = $('.call-me-exit-btn-cont');
const callMeLinkCont = $('.call-me-link-cont');
const contactSocial = $('.contact-all-social-cont');
const modal = $('.modal');
const isFocus = $('.is-focus');
const modalExitBtn = $('.exit-btn-modal');
const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);


// FUNCTIONS

function bullshit() {
    if ($(window).width() > 768 && $(window).width() > $(window).height()) {
        $('.please-rotate').addClass('hide');
    } else if ($(window).width() > $(window).height()) {
        $('.please-rotate').removeClass('hide');
    }
    if ($(window).width() < $(window).height()) {
        $('.please-rotate').addClass('hide');
    }
}

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
    bullshit();
    show(certsBtn, certs);
    show(bioBtn, bio);
    showHide(writeMeCont, writeMeLinkCont, contactSocial);
    showHide($('.write-me-exit-btn'), contactSocial, writeMeLinkCont);

    hide(popupExit, popup);
    hide(emailMeExit, emailMeLink);

    showHide(modalExitBtn, navMenu, modal);
    showHide(pcCertsExitBtn, aboutModal, certs);
    showHide(mobileCertsExitBtn, aboutModal, certsMobile);

    // $('.skill-modals').hide();
    showHide(bioExitBtn, aboutModal, bio);

    $(certsBtn).on('click', () => {
        $(certs).css('display', 'flex');
    });

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


    $('.email-me-cont').on('click', () => {
        var email = 'edolly2@protonmail.com';
        var subject = 'Your Portfolio';
        var emailBody = 'Hi, my name is ';
        // var attach = 'path';
        if (isMobile) {
            parent.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
        } else {
            $('.email-me-link-cont').show(500);
        }


    });

    $('.call-me-cont').on('click', () => {
        if ($(width) < 640) {
            parent.location.href = "tel:402-708-5866";
        } else {
            $(callMeLinkCont).show(500);
        }
    });

    $('.email-me-cont').on('click', () => {
        if ($(width) < 640) {
            parent.location.href = "mailto:edolly2@protonmail.com";
        } else {
            $(emailMeLink).show(500);
        }
    });


    $('#contact').on('click', () => {
        if ($(window).width() <= 440) {
            $('.contact-icon-cont').css('display', 'grid');
            $('.contact-icon-cont').css('grid-template-columns', '1fr');
        } else {
            return;
        }
    });

    $(certsBtn).on('click', () => {
        if ($(window).width() < 768) {
            console.log('ismobile');
            $(certsMobile).show(500);
            $(certs).hide();
        } else {
            console.log('isnotmboile');
            $(certsMobile).hide();
            $(certs).show(500);
            $(certs).css('display', 'flex');
        }
    });

    $(window).bind('beforeunload', function () {
        $('.popup').css('display', 'block');
        $('.navCont').css('display', 'none');
    });


    $(writeMeCont).on('click', () => {
        $(contactExitBtn).hide(500);
    })

    $(window).resize(() => {
        bullshit();
    });
    bullshit();

    $(window).resize(() => {
        if ($(writeMeLinkCont).is(':visible')) {
            $('.please-rotate').addClass('hide');
        }
    });

    $('.write-me-exit-btn').on('click', () => {
        setTimeout(bullshit(), 1000)
        $(contactExitBtn).show(500);
        console.log("time");
    })
    $('#submit').on('click', () => {
        $(writeMeLinkCont).hide(500);
        bullshit();
        $(contactExitBtn).show(500);
    })

    $(isFocus).focusin(() => {
        $('.please-rotate').addClass('hide');
    });

    $(isFocus).focusout(() => {
        bullshit();
    });

    let height = $(window).height();
    let width = $(window).width();

    $(callMeCont).on('click', () => {
        $(callMeLinkCont).show(500);
        $(contactExitBtn).hide(500);
    });
    $(callMeExitBtn).on('click', () => {
        $(callMeLinkCont).hide(500);
        $(contactExitBtn).show(500);
    });
});

// VANILLA JAVASCRIPT

// let copyBtn = document.getElementsByClassName('copy-btn').addEventListener('click', () => {
//     let copyText = document.getElementById("myPhoneInput");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
// });

// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
//   }


function copyPhone() {
    var copyPhone = document.getElementById("myPhoneInput").select();
    document.execCommand('copy');
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyPhone.value;
}
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

function copyEmail() {
    document.getElementById("myEmailInput").select();
    document.execCommand('copy');
}

function onMouseOut(event) {
    if (event.clientY < 1 && event.clientX > 1000 && window.screen.width > 768) {
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