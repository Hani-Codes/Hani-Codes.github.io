document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const body = document.body;

    // Load saved language or default to Arabic (since client requested it)
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
});
