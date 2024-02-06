let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-inoput');
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_/|'-+";

    let pass = "";

    for (let i = 0; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    password.innerHTML = pass;

    newPassword = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(newPassword);
}