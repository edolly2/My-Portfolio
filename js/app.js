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

$(document).ready(() => {
    $(certsExitBtn).on('click', () => {
        $(certsModal).hide();
    });

    $(certsBtn).on('click', () => {
        $(certsModal).show();
    })

    $('.test').on('click', () => {
        $('.test').hide();
    })
});