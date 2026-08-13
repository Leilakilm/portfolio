document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu')
    const burgerBtn = document.getElementById('burgerBtn')

    burgerBtn.addEventListener('click', function(e) {
        e.stopPropagation()
        mobileMenu.classList.toggle('open')
    });

    const mobileLinks = mobileMenu.querySelectorAll('.links--mobile a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open')
        });
    });

    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('open')
        }
    });
});