// DOM Elements
const langPills = document.querySelectorAll('.lang-pill');
const inputText = document.getElementById('inputText');
const translateButton = document.getElementById('translateButton');
const btnText = translateButton.querySelector('.btn-text');
const outputCard = document.getElementById('outputCard');
const outputText = document.getElementById('outputText');
const outputLang = document.getElementById('outputLang');

let selectedLanguage = null;

// Language display names
const langNames = {
    french: 'French 🇫🇷',
    spanish: 'Spanish 🇪🇸',
    japanese: 'Japanese 🇯🇵'
};

// ===== Language Pill Selection =====
langPills.forEach(pill => {
    pill.addEventListener('click', () => {
        langPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedLanguage = pill.dataset.lang;
    });
});

// ===== Toast Helper =====
function showToast(message) {
    // Remove existing toast
    const existing = document.querySelector('.status-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'status-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== Translate =====
translateButton.addEventListener('click', async () => {
    const text = inputText.value.trim();

    if (!selectedLanguage) {
        showToast('⚠️ Please select a language first');
        return;
    }

    if (!text) {
        showToast('⚠️ Please enter some text to translate');
        return;
    }

    // Loading state
    translateButton.disabled = true;
    translateButton.classList.add('loading');
    btnText.textContent = 'Translating...';
    outputCard.classList.remove('visible');
    outputText.classList.remove('error');

    try {
        const response = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: text,
                language: selectedLanguage
            })
        });

        const data = await response.json();

        if (!response.ok) {
            outputText.textContent = data.error || 'Translation failed.';
            outputText.classList.add('error');
            outputLang.textContent = '';
        } else {
            outputText.textContent = data.translatedText;
            outputLang.textContent = langNames[selectedLanguage] || '';
        }

        outputCard.classList.add('visible');

    } catch (error) {
        console.error('Translation error:', error);
        outputText.textContent = 'Could not connect to the translation server. Make sure the server is running.';
        outputText.classList.add('error');
        outputLang.textContent = '';
        outputCard.classList.add('visible');
    } finally {
        translateButton.disabled = false;
        translateButton.classList.remove('loading');
        btnText.textContent = 'Translate';
    }
});

// ===== Keyboard shortcut: Ctrl+Enter to translate =====
inputText.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        translateButton.click();
    }
});
