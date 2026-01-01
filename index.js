import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });  

const translateButton = document.getElementById('translateButton');
const inputText = document.getElementById('inputText');

translateButton.addEventListener('click', () => {
    const textToTranslate = inputText.value;
    const selectedLanguage = document.querySelector('input[name="fav_language"]:checked').value;
    console.log(`Translating "${textToTranslate}" to ${selectedLanguage}`);
    openai.chat.completions.create({
        model: 'gpt-5.2-turbo',
        messages: [
            {
                role: 'user',
                content: `Translate the following text to ${selectedLanguage}: ${textToTranslate}`
            }
        ]
    }).then((response) => {
        const translatedText = response.choices[0].message.content;
        alert(`Translated Text: ${translatedText}`);
    }).catch((error) => {
        console.error('Error during translation:', error);
    });
});
