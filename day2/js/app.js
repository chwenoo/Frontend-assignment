
let faq = document.querySelectorAll('.faq');

for(let x = 0; x < faq.length; x++) {

    faq[x].addEventListener('click', function (e) {
        e.preventDefault();

        faq[x].classList.toggle('show');
    });
}