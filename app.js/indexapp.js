const signup = document.querySelector('button');

function chekEmailPhone(email_inp) {
    if (!/^[a-zA-Z0-9_\.\-]+@[a-z0-9]+\.[a-z]{1,3}$|^\+[0-9]{12}$/g.test(email_inp))
        throw new Error('Некорректный номер или адрес электронной почты');
}

function chekPassword(pass_inp) {
    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/gm.test(pass_inp))
        throw new Error('Ошибка ввода пароля');
}

signup.addEventListener('click', function () {
    try {
        const email_inp = document.querySelector('.email input');
        const pass_inp = document.querySelector('.password input');
        chekEmailPhone(email_inp.value);
        chekPassword(pass_inp.value);
        alert('Вы авторизованы');
    } catch (error) {
        alert(error.message);
    }
});