export const validation = (username, email, password, confirmPassword) => {
    const errors = {}

    if (username.trim() === "") {
        errors.username = "username cant be empty"
    }
    if (email.trim() === "") {
        errors.email = "email cant be empty"
    } else {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(regex)) {
            errors.email = "invalid email"
        }
    }
    if (password === "") {
        errors.password = "password cant empty"
    } else if (password !== confirmPassword) {
        errors.password = "password dont match"
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1

    }



}

export const validationLogin = (username, password) => {
    const errors = {}

    if (username.trim() === "") {
        errors.username = "username cant be empty"
    }
    if (password === "") {
        errors.password = "password cant empty"
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1

    }



}