// Переводы для русского и английского языков
const translations = {
    ru: {
        name: 'Mikhail',
        aka: 'или MZ',
        tagline: 'я создаю проекты на разных языках с 2021 года!',
        channel1: 'веду YouTube канал с 2024 года! и teleram канал с 2024 года!',
        channel2: 'на YouTube выкладываю видео с обзорами на разные windows и технику , в основном ретро технику',
        projects: 'делааю разные бесполезные штуки (иногда и полезные) на HTML , Python , Delphi и тд с 2022 года!',
        micode: 'совсем не давно начал разработку языка программирования MiCode !',
        builds: 'так же я делаю сборки на основе разных версий windows и выкладываю их на Archive.org',
        interview1: 'ещё я брал интервью у Daniel Myslivets',
        interview2: 'посмотреть можно на YouTube:',
        photo1: 'иногда от скуки я фоткаю под красивым ракурсом всё что со мной рядом',
        photo2: 'и эти фото попадают в сборки WIndows , хоть и не всегда',
        hobby: 'хобби, не более',
        telegram_title: 'Telegram канал:',
        youtube1_title: 'YouTube канал:',
        youtube2_title: 'второй YouTube канал:',
        tiktok_title: 'TikTok:',
        teams_title: 'сообщество в Microsoft Teams:',
        archive_title: 'Archive.org:',
        copyright: '© 2026 Mikhail (MZ). All rights reserved.',
        thanks: 'Thank you!',
        theme_button: 'Тёмная тема',
        lang_button: 'English'
    },
    en: {
        name: 'Mikhail',
        aka: 'or MZ',
        tagline: 'I have been creating projects in different languages since 2021!',
        channel1: 'I run a YouTube channel since 2024! and a Telegram channel since 2024!',
        channel2: 'on YouTube I post videos reviewing different Windows versions and tech, mostly retro tech',
        projects: 'I make various useless things (sometimes useful) in HTML, Python, Delphi, etc. since 2022!',
        micode: 'I recently started developing the MiCode programming language!',
        builds: 'I also make builds based on different Windows versions and upload them to Archive.org',
        interview1: 'I also interviewed Daniel Myslivets',
        interview2: 'you can watch it on YouTube:',
        photo1: 'sometimes when bored I take photos of everything around me from a beautiful angle',
        photo2: 'and these photos end up in Windows builds, though not always',
        hobby: 'hobby, nothing more',
        telegram_title: 'Telegram channel:',
        youtube1_title: 'YouTube channel:',
        youtube2_title: 'second YouTube channel:',
        tiktok_title: 'TikTok:',
        teams_title: 'Microsoft Teams community:',
        archive_title: 'Archive.org:',
        copyright: '© 2026 Mikhail (MZ). All rights reserved.',
        thanks: 'Thank you!',
        theme_button: 'Dark theme',
        lang_button: 'Русский'
    }
};

let currentLang = 'ru'; // По умолчанию русский (как в оригинале)
let currentTheme = 'light'; // По умолчанию светлая тема

// Функция для применения языка
function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'DIV' || element.tagName === 'P' || element.tagName === 'SPAN') {
                element.innerHTML = translations[lang][key];
            } else if (element.tagName === 'BUTTON') {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Обновляем текст кнопки языка
    const langButton = document.getElementById('lang-toggle');
    if (langButton) {
        langButton.textContent = lang === 'ru' ? translations.en.lang_button : translations.ru.lang_button;
    }

    // Сохраняем выбранный язык
    localStorage.setItem('preferred-language', lang);
}

// Функция для переключения языка
function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    applyLanguage(currentLang);
}

// Функция для применения темы
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-toggle').textContent = currentLang === 'ru' ? 'Светлая тема' : 'Light theme';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('theme-toggle').textContent = currentLang === 'ru' ? 'Тёмная тема' : 'Dark theme';
    }
    
    // Сохраняем выбранную тему
    localStorage.setItem('preferred-theme', theme);
}

// Функция для переключения темы
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
}

// Загрузка сохранённых настроек при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница Михаила загружена!');
    
    // Загружаем сохранённый язык
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        currentLang = savedLang;
    }
    applyLanguage(currentLang);
    
    // Загружаем сохранённую тему
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        currentTheme = savedTheme;
        applyTheme(savedTheme);
    }
    
    // Назначаем обработчики для кнопок
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});