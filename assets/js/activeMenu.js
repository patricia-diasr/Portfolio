const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let currentSectionId = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.clientHeight + 100;
        const scrollPosition = window.scrollY;
    
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = section.id;
        }
    });
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === currentSectionId) {
            link.classList.add('active-section');
        } else {
            link.classList.remove('active-section');
        }
    });
});