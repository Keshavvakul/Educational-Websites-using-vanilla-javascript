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
            console.log("working");
        } else if (icon.className === ('bi bi-dash')) {
            icon.className = ('bi bi-plus')
            console.log("working");
        }
    })
}) 
