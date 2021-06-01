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







$(document).ready(() => {
    $(navMenuEnter).on('click', () => {
        $(navMenu).show(500);
        $(navMenuEnter).fadeOut(500);
    });

    $(navMenuExit).on('click', () => {
        $(navMenu).hide(500);
        $(navMenuEnter).fadeIn(500);
    });

    // $(navLink).on('mouseover', (e) => {
    //     $(e.target).css({'background-color' : '#1ceaea', 'color' : 'yellow', 'box-shadow' : 'inset 0 0 2rem black'});
    // });

    // $(navLink).on('mouseleave', (e) => {
    //     $(e.target).css({'background-color' : 'rgba(255, 255, 255, 0.05)', 'box-shadow' : '5px 5px 30px rgba(0, 0, 0, 0.2)', 'color' : '#1ceaea'});
    // });

   
    $(navLink).on('click', (e) => {
        $(e.currentTarget).add('.selected');
        $(e.currentTarget).css('text-decoration', 'line-through');
    });

    
    $(navLink).on('click', (e) => {
        $('.modal').hide(500);
        if($(e.target).is('#about')) {
            $(aboutModal).show(500);
            $(navMenu).hide(500);
        }
        else if($(e.target).is('#projects')) {
            $(projectsModal).show(500);
            $(navMenu).hide(500);
        }
        else if($(e.target).is('#contact')) {
            $(contactModal).show(500);
            $(navMenu).hide(500);
        }
        else {
            $('.modal').hide(500);
        }
    });

    $('.exit-btn-modal').on('click', () => {
        $('.modal').hide(500);
        $(navMenu).show(500);
    });

    $(certsBtn).on('click', () => {
        $(certs).show(500);
    });

    $(gobackBtn).on('click', () => {
        $(certs).hide(500);
        $(aboutModal).show(500);
    });

    $(bioBtn).on('click', () => {
        $(bio).show(500)
    });
    $('.skill-modals').hide();
    $(gobackBtn2).on('click', () => {
        $(bio).hide(500);
        $(aboutModal).show(500);
    });

    $(popupExit).on('click', () => {
        $(popup).hide(500);
    });

    if($(popup).css('display') == 'block') {
        $(navMenu).hide();
    }

    $('.email-me-exit-btn').on('click', () => {
        $('.email-me-link-cont').hide(500);
    });

    $('.soci1').on('mouseover', () => {
        $('.soci-title').css('color', 'yellow');
    });

    $('.soci1').on('mouseleave', () => {
        $('.soci-title').css('color', 'white');
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    $('.email-me-cont').on('click', () => {
        var email = 'demo@demo.com';
        var subject = 'Test';
        var emailBody = 'Hi Sample,';
        var attach = 'path';
        if(isMobile) {
            parent.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
                "?attach="+attach;
        }
        else {
            $('.email-me-link-cont').show(500);
        }
    });

    $('.call-me-cont').on('click', () => {
        if(isMobile) {
            parent.location.href = "tel:402-708-5866";
        }
        else {
            $('.call-me-link-cont').show(500);
        }
    });


    $('.write-me-cont').on('click', () => {
        $('.write-me-link-cont').show(500);
    });

    var currentMousePos = { x: -1, y: -1 };
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        console.log(currentMousePos.x, currentMousePos.y);
    });

});

// CURSOR
// let cursor = document.getElementById('cursor');
// document.onmousemove = function(e) {
//     cursor.style.left = (e.pageX - 25) + "px";
//     cursor.style.top = (e.pageY - 25)+ "px";
//     cursor.style.display = "block";
// }

function onMouseOut(event) {
    if (event.clientY < 50) {
    document.removeEventListener("mouseout", onMouseOut);
    document.getElementById("popup").style.display = "block";
    document.getElementById("navCont").style.display = "none";
    }
}
document.addEventListener("mouseout", onMouseOut);

//   var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// 		var element = document.getElementById('text');
// 		if (isMobile) {
//   			element.innerHTML = "You are using Mobile";
// 		} else {
// 			element.innerHTML = "You are using Desktop";
// 		}