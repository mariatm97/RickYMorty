

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export const validate = (userData) => {
    const errors = {};

    if (userData.username.length <= 1 && !regexEmail.test(userData.username)) {
        errors.username = 'Please type a valid email';
    }

    if (userData.password.length >= 1 && !regexPassword.test(userData.password)) {
        errors.password = 'Password must contain: a number, a special character and have between 6 and 10 characters';
    }
    return errors
}