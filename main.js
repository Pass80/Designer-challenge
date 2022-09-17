const emailInput = document.getElementById('email');
const modal = document.getElementById('modal');

const submitHandler = (e) => {
    if (emailInput.value.includes('@')) {
        modal.style.display = 'flex';
        emailInput.value = '';
    } else {
        alert('Enter a valid e-mail address');
    }
};

const modalHandler = () => {
    modal.style.display = 'none';
};
