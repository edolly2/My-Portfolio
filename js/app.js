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







$(document).ready(() => {
    $(navMenuEnter).on('click', () => {
        $(navMenu).show(500);
        $(navMenuEnter).fadeOut(500);
    });

    $(navMenuExit).on('click', () => {
        $(navMenu).hide(500);
        $(navMenuEnter).fadeIn(500);
    });

    $(navLink).on('click', (e) => {
        $(navLink).css({'background-color' : 'rgba(255, 255, 255, 0.05)', 'box-shadow' : '5px 5px 30px rgba(0, 0, 0, 0.2)', 'color' : '#1ceaea'});
        $(e.target).css({'background-color' : '#1ceaea', 'color' : 'yellow', 'box-shadow' : 'inset 0 0 2rem black'});
    });

    $('.nav-link').on('click', (e) => {
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

    $('.exit-btn').on('click', () => {
        $('.modal').hide(500);
        $(navMenuEnter).show();
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
});

