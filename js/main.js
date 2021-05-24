$(document).ready(() => {
    $('.form-btn').on('click', () => {
        $('#myModal').show();
        $('.modal-content').slideDown(1000);
    });

    $('#submit').on('click', () => {
        $('#myModal').hide();

    });

    $('#exit').on('click', () => {
        $('#myModal').hide();
    });
});


const submit = document.getElementById('submit');
const toast = document.getElementById('snackbar');

submit.addEventListener('click', () => {
    toast.classList.add('show-toast');
    setTimeout(() => {
        toast.className = toast.className.replace("show-toast", "");
    }, 3000);
});