

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export const validate = (userData) => {
    const errors = {};

    if (!regexEmail.test(userData.username)) {
        errors.username = 'Debe ser un correo electrónico';
    }
    if (!userData.username) {
        errors.username = 'Se requiere un nombre de usuario...';
    }
    if (userData.length > 35) {
        errors.username = 'Debe tener menos de 35 caracteres';
    }
    if (!regexPassword.test(userData.password)) {
        errors.password = 'Debe tener al menos un numero, un caracter especial y tener entre 6 y 10 caracteres...';
    }

    return errors
}