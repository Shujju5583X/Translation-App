# 🦜 PollyGlot

**Perfect Translation Every Time** — An AI-powered translation app that instantly translates your text into French, Spanish, or Japanese.

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white)

---

## ✨ Features

- 🌍 **Multi-Language Support** — Translate text to French, Spanish, or Japanese
- 🤖 **AI-Powered** — Leverages OpenAI's GPT model for accurate, context-aware translations
- ⚡ **Fast & Lightweight** — Built with Vite for blazing-fast development and performance
- 🎨 **Clean UI** — Modern, responsive interface with the Poppins font family

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- An [OpenAI API Key](https://platform.openai.com/api-keys)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Translation\ App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your API key**
   
   Create a `.env` file in the root directory (or update the existing one):
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:5173`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool and development server |
| **JavaScript (ES6+)** | Core application logic |
| **OpenAI API** | AI-powered translation engine |
| **CSS3** | Custom styling with Poppins font |

---

## 📁 Project Structure

```
Translation App/
├── assets/
│   ├── fr-flag.png      # French flag icon
│   ├── sp-flag.png      # Spanish flag icon
│   ├── jpn-flag.png     # Japanese flag icon
│   ├── parrot.png       # PollyGlot mascot
│   └── worldmap.png     # Header background
├── index.html           # Main HTML structure
├── index.css            # Styling
├── index.js             # Application logic & OpenAI integration
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── .env                 # Environment variables (API key)
```

---

## 📖 How It Works

1. **Enter Text** — Type or paste the text you want to translate in the input area
2. **Select Language** — Choose your target language (French, Spanish, or Japanese)
3. **Translate** — Click the "Translate" button
4. **View Results** — Your translated text appears instantly

The app sends your text to OpenAI's GPT model with the selected language, and the AI returns an accurate, context-aware translation.

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the development server |
| `npm run dev` | Alternative: Start the dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |

---

## 🌐 Supported Languages

| Language | Flag |
|----------|------|
| 🇫🇷 French | `french` |
| 🇪🇸 Spanish | `spanish` |
| 🇯🇵 Japanese | `japanese` |

---

## ⚠️ Important Notes

- **API Key Required** — You must provide a valid OpenAI API key for the translation feature to work
- **Usage Costs** — Using the OpenAI API incurs costs based on usage; refer to [OpenAI's pricing](https://openai.com/pricing)
- **Rate Limits** — Be mindful of OpenAI's rate limits to avoid service interruptions

---

## 📄 License

This project is for educational purposes.

---

## 🙏 Acknowledgments

- Built as part of the [Scrimba Fullstack Developer Path](https://scrimba.com/fullstack-path-c0fullstack)
- Powered by [OpenAI](https://openai.com/)
- Development server by [Vite](https://vitejs.dev/)

---

**Happy Translating! 🦜✨**