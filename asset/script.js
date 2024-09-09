document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-list a');
    const checkbox = document.getElementById('check');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                checkbox.checked = false;
            }
        });
    });

    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Sesuaikan dengan tinggi navbar Anda
                    behavior: 'smooth'
                });
            }
        });
    });
});

