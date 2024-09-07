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
});
