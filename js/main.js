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

$(document).ready(() => {


    const submit = document.getElementById('submit');
    const toast = document.getElementById('snackbar');

    $('#submit').on('click', () => {
        $('#snackbar').addClass('show-toast');
        setTimeout(() => {
            toast.className = toast.className.replace("show-toast", "");
        }, 3000);
    });
});