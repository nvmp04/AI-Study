import { createRef } from "react";

export const emailRef = createRef(null);
export const passwordRef = createRef(null);
export function isValidEmail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
export function check(){
    let hasError = false;
    const inputEmail = emailRef.current.value;
    if (inputEmail.trim() === '') {
        emailRef.current.placeholder = 'Email has not been entered';
        hasError = true;
    } else if (!isValidEmail(inputEmail)) {
        emailRef.current.value = '';
        emailRef.current.placeholder = 'Invalid Email'
        hasError = true;
    } else {
        emailRef.current.placeholder = 'Email address'
    }
    const inputPassword = passwordRef.current.value;
    if (inputPassword.trim() === '') {
        hasError = true;
        passwordRef.current.placeholder = 'Password has not been entered';
    }
    return hasError;
}