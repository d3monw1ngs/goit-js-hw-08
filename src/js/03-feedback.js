import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const loadFormState = () => {
    const storedState = localStorage.getItem('feedback-form-state');

    if (storedState) {
        const parsedState =  JSON.parse(storedState);
        emailInput.value = parsedState.email;
        messageInput.value = parsedState.message;
    }
};

const submitForm = (e) => {
    e.preventDefault();

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';


    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log("Form Data:", formState);
};

feedbackForm.addEventListener('input', () => {
    saveFormState();
});

window.addEventListener('load', () => {
    loadFormState();
});

feedbackForm.addEventListener('submit', submitForm);

