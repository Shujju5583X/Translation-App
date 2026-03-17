# 🦜 PollyGlot

**AI-Powered Translation App** — Instantly translate text into French, Spanish, or Japanese with a clean, Duolingo-inspired interface.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![OpenRouter](https://img.shields.io/badge/OpenRouter-6366F1?style=flat&logoColor=white)

---

## ✨ Features

- 🌍 **Multi-Language** — French 🇫🇷, Spanish 🇪🇸, and Japanese 🇯🇵
- 🤖 **AI-Powered** — Uses OpenRouter API for context-aware translations
- 🎨 **Duolingo-Style UI** — Dark mode, 3D green button, pill selectors, smooth animations
- 🔒 **Secure** — API key stays on the server, never exposed to the browser
- ⚡ **Lightweight** — Express backend + vanilla JS frontend, no heavy frameworks
- ⌨️ **Keyboard Shortcut** — Press `Ctrl+Enter` to translate instantly

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- An [OpenRouter API Key](https://openrouter.ai/keys)

### Setup

```bash
# 1. Clone the repo
git clone <repository-url>
cd Translation\ App

# 2. Install dependencies
npm install

# 3. Create your .env file
```

Create a `.env` file in the root:

```env
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=openai/gpt-oss-safeguard-20b
PORT=3000
```

```bash
# 4. Start the server
npm run server
```

Open `http://localhost:3000` in your browser — done! 🎉

---

## 🏗️ Architecture

```
Browser (index.js)
    │
    │  POST /api/translate { text, language }
    ▼
Express Server (server.js)
    │
    │  POST /chat/completions (with API key)
    ▼
OpenRouter AI API
    │
    │  Translated text
    ▼
Browser (displays result)
```

The frontend sends requests to Express, which securely proxies them to OpenRouter. Your API key never leaves the server.

---

## 📁 Project Structure

```
Translation App/
├── assets/
│   ├── parrot.png         # PollyGlot mascot (navbar logo)
│   ├── fr-flag.png        # French flag
│   ├── sp-flag.png        # Spanish flag
│   ├── jpn-flag.png       # Japanese flag
│   └── worldmap.png       # Legacy background asset
├── server.js              # Express backend & API proxy
├── index.html             # App HTML structure
├── index.css              # Duolingo-style design system
├── index.js               # Frontend logic & interactions
├── vite.config.js         # Vite dev server config
├── package.json           # Dependencies & scripts
├── .env                   # Environment variables (gitignored)
└── .gitignore             # Git ignore rules
```

---

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run server` | Start the Express backend (production) |
| `npm run dev` | Start the Vite dev server (frontend HMR) |
| `npm run build` | Build frontend for production |
| `npm run preview` | Preview the production build |

---

## ⚠️ Notes

- **API Key Required** — A valid OpenRouter API key in `.env` is needed for translations
- **Usage Costs** — OpenRouter API usage may incur costs; see [pricing](https://openrouter.ai/docs#models)
- **Rate Limits** — Be mindful of API rate limits

---

## 📄 License

This project is for educational purposes.

---

## 🙏 Acknowledgments

- Built as part of the [Scrimba Fullstack Developer Path](https://scrimba.com/fullstack-path-c0fullstack)
- Powered by [OpenRouter](https://openrouter.ai/)
- Dev server by [Vite](https://vitejs.dev/)
- UI inspired by [Duolingo](https://www.duolingo.com/)

---

**Happy Translating! 🦜✨**