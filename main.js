// Change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 50)
})


// Show/hide faq answers inside the paragraph tag

 /* const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change icons

        const icon = document.querySelector('.faq__icons');
        const svgIcon = icon.querySelector('svg');

        svgIcon.addEventListener('click', () => {
            if(this.classList.contains('bi bi-plus')) {
                this.classList.remove('bi bi-plus');
                this.classList.add('bi bi-dash');
                console.log("Working")        
            }else if (this.classList.contains('bi bi-dash')) {
                this.classList.remove('bi bi-dash');
                this.classList.add('bi bi-plus');
            }
        })
    })
}) */

const faqs = document.querySelector('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
});