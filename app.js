document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const body = document.body;

    // --- Language Switcher ---
    const savedLang = localStorage.getItem('hani-codes-lang') || 'ar';
    setLanguage(savedLang);

    langToggleBtn.addEventListener('click', () => {
        const currentLang = body.classList.contains('lang-ar') ? 'ar' : 'en';
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        if (lang === 'ar') {
            body.classList.remove('lang-en');
            body.classList.add('lang-ar');
            body.setAttribute('dir', 'rtl');
            localStorage.setItem('hani-codes-lang', 'ar');
        } else {
            body.classList.remove('lang-ar');
            body.classList.add('lang-en');
            body.setAttribute('dir', 'ltr');
            localStorage.setItem('hani-codes-lang', 'en');
        }
    }

    // --- Apps Category Filter ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const appCards = document.querySelectorAll('.app-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            appCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Hide card temporarily for animation reset
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.classList.remove('hidden');
                        // Fade back in
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.classList.add('hidden');
                    }
                }, 300);
            });
        });
    });
});
