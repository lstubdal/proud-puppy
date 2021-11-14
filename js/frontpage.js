
/* Navigate page*/
const preview_buttons = document.querySelectorAll('.preview__button');
[...preview_buttons].forEach(button => {
    button.addEventListener('click', event => {
        console.log('clicked');
        if (button.innerText === 'See clothes'){
            window.location.href = 'clothes.html';
        } else {
            if (button.innerText === 'See accessories'){
                window.location.href = 'accessories.html';
            }
        }   
    })
});
