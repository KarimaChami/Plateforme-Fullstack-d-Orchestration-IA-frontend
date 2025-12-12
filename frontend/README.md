# Hybrid-Analyzer - Frontend

## 📋 Description

Interface web moderne pour l'analyse automatisée de textes via orchestration d'IA. Permet l'authentification sécurisée et l'affichage des résultats de classification et de synthèse.

## 🏗️ Architecture

```
frontend/
├── app/
│   ├── analyze/
│   │   └── page.js
│   ├── login/
│   │   └── page.js
│   ├── register/
│   │   └── page.js
│   ├── layout.js
│   └── page.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Installation

### Prérequis

- Node.js
- npm 
- Backend Hybrid-Analyzer en cours d'exécution

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone https://github.com/KarimaChami/Plateforme-Fullstack-d-Orchestration-IA-frontend.git
cd ./frontend
```

2. **Installer les dépendances**
```bash
npm install

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env
```


4. **Lancer en mode développement**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🎨 Fonctionnalités

### Page d'Authentification (`/auth`)

#### Inscription
- Formulaire de création de compte
- Validation en temps réel
- Messages d'erreur explicites
- Redirection automatique après inscription

#### Connexion
- Formulaire de connexion sécurisé
- Gestion du token JWT
- Remember me (optionnel)
- Récupération de mot de passe (optionnel)

### Page d'Analyse (`/analyze`)

#### Interface d'analyse
- Zone de texte pour saisir le contenu à analyser
- Compteur de caractères
- Bouton d'envoi avec état de chargement
- Option de réinitialiser le formulaire

#### Affichage des résultats
```
┌──────────────────────────────────┐
│ 📊 Résultats de l'Analyse        │
├──────────────────────────────────┤
│ Categorie: Finance               │
│ Score: 92%                       │
│                                  │
│ 📝 summary :                     │
│ [Résumé contextualisé généré]    │
│                                  │
│ 😊 Ton: Positif             │
│                                  │
│ ⏱️ Temps de traitement: 2.34s    │
└──────────────────────────────────┘
```


## 🧪 Tests

### Tests Unitaires

```bash
pytest
```




## 🐳 Docker

### Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

CMD ["npm","run","dev"]
```

## 📊 Performance

### Optimisations

- **Code Splitting** : Routes chargées dynamiquement
- **Lazy Loading** : Composants lourds chargés à la demande
- **Image Optimization** : Formats WebP, lazy loading
- **Caching** : Service Worker pour cache statique
- **Bundle Size** : < 200KB (gzipped)



## 👥 Auteurs

- Karima Chami - Dévloppeuse Fullstack & Ai

## 🔗 Liens utiles

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Axios Documentation](https://axios-http.com/)