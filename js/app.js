function openNav() {
    document.getElementById('myNav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '320px';
}

function closeNav() {
    document.getElementById('myNav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

window.addEventListener('orientationchange', function(event) {
    console.log(
        'the orientation of the device is now' +
        event.target.screen.orientation.angle
    );
});


function openForm() {
    document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}

const certsModal = $('.certs-modal-cont');
const certsExitBtn = $('.certs-modal-close-btn');
const certsBtn = $('.certs-btn');

const bioModal = $('.bio-modal-cont');
const bioExitBtn = $('.bio-modal-close-btn');
const bioBtn = $('.bio-modal-btn');

$(document).ready(() => {
    $(certsExitBtn).on('click', () => {
        $(certsModal).hide();
        $(certsBtn).show();
    });

    $(certsBtn).on('click', () => {
        $(certsModal).show();
        $(certsBtn).hide();
    });

    $(bioExitBtn).on('click', () => {
        $(bioModal).hide();
        $(bioBtn).show();
    });

    $(bioBtn).on('click', () => {
        $(bioModal).show();
        $(bioBtn).hide();
    });

});
