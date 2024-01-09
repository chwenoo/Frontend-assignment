let errors = document.querySelectorAll('.error');
let submit = document.querySelector('.submit');
// let input = document.querySelectorAll('dd > input');
let input = document.querySelectorAll('[data-require]');

document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault();

    for(let x = 0; x < errors.length; x++) {
        if(input[x].value === "") {
            errors[x].style.display = "block";
            errors[x].innerText = `${input[x].name} is required.`;
            // errors[x].innerText = `${input[x].name.replace(/-/g, " ")} is required.`;
        }
    }
});