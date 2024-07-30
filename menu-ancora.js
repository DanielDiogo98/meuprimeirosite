document.addEventListener('DOMContentLoaded', function() {
    const menuHeight = document.getElementById('menu').offsetHeight;

    document.querySelectorAll('#menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - menuHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});