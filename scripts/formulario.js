const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')
const RG = document.getElementById('RG')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkImputs()
})

function checkImputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    const RGValue = RG.value.trim()

    if (usernameValue === '') {
        errorValidation(username, 'Preencha esse campo')
    } else {
        sucessValidation(username)
    }

    if (emailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    } else {
        sucessValidation(email)
    }

    if (passwordValue === '') {
        errorValidation(password, 'Preencha esse campo')
    } else {
        sucessValidation(password)
    }

    if (passwordtwoValue === '') {
        errorValidation(passwordtwo, 'Preencha esse campo')
    } else if (passwordtwoValue !== passwordtwoValue) {
        errorValidation(passwordtwo, 'senha não são a mesma')
    }
    else {
        sucessValidation(passwordtwo)
    }

    if (RGValue === '') {
        errorValidation(RG, 'Preencha esse campo')
    } else {
        sucessValidation(RG)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function sucessValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control sucess'
}