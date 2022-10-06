function handleFloatingLabel() {
    const label = document.querySelector('.js-label');
    const input = document.querySelector('.js-input')
    input.addEventListener('focus', function () {
        label.classList.add('is-floating')
    })
    input.addEventListener('blur', function () {
        console.log(input.value)
        if (input.value === '') {
            label.classList.remove('is-floating')
        }
        else {
            label.classList.add('is-floating')
        }
    })
}


function handlePasswordSwitcher() {
    const button = document.querySelector('.js-input-passwoord-toggle');
    button.addEventListener('change', function () {
        const input = document.querySelector('.js-passwoord')
        if (input.type === 'password') {
            input.type = 'text'
        } else {
            input.type = 'password'
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});