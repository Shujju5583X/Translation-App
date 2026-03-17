import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(__dirname));

// Translation API endpoint
app.post('/api/translate', async (req, res) => {
    const { text, language } = req.body;

    if (!text || !language) {
        return res.status(400).json({ error: 'Please provide both text and language.' });
    }

    try {
        const response = await fetch(process.env.OPENROUTER_BASE_URL + '/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'http://localhost:3000',
                'X-Title': 'PollyGlot Translation App'
            },
            body: JSON.stringify({
                model: process.env.OPENROUTER_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a professional translator. Translate the given text accurately. Return ONLY the translated text, nothing else — no explanations, no quotes, no extra formatting.'
                    },
                    {
                        role: 'user',
                        content: `Translate the following text to ${language}:\n\n${text}`
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('OpenRouter API error:', response.status, errorData);
            return res.status(response.status).json({
                error: errorData?.error?.message || 'Translation service returned an error.'
            });
        }

        const data = await response.json();
        const translatedText = data.choices?.[0]?.message?.content?.trim();

        if (!translatedText) {
            return res.status(500).json({ error: 'No translation received from the AI model.' });
        }

        res.json({ translatedText });

    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'An internal server error occurred during translation.' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ PollyGlot server running at http://localhost:${PORT}`);
});
