// Change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 50)
})


// Show/hide faq answers inside the paragraph tag

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change icons
        const icon = faq.querySelector('.faq__icons i') 
        if(icon.className === ('bi bi-plus')) {
            icon.className = ('bi bi-dash');
        } else if (icon.className === ('bi bi-dash')) {
            icon.className = ('bi bi-plus')
        }
    })
}) 


// Show/hide nav menu in smaller devices

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)