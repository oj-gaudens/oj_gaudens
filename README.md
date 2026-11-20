https://oj-gaudens.github.io/oj_gaudens/
# Portfolio Oumar-Julien Gaudens

Portfolio professionnel en Eleventy/Markdown avec design moderne.

## 🚀 Installation

```bash
npm install
```

## 💻 Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

## 🏗️ Build Production

```bash
npm run build
```

Les fichiers seront générés dans `docs/`

## 📁 Structure

```
src/
├── _includes/
│   └── layout.njk       # Template principal
├── assets/
│   ├── css/
│   │   └── main.css     # Styles
│   ├── js/
│   │   └── theme.js     # Gestion thème dark/light
│   └── images/
│       └── photo.jpg    # Votre photo
├── index.md             # Page d'accueil
├── about.md             # À propos
├── CV.md                # CV
├── projects.md          # Projets
├── skills.md            # Compétences
├── experience.md        # Parcours
└── contact.md           # Contact
```

## 📝 Personnalisation

1. Remplacez `src/assets/images/photo.jpg` par votre photo
2. Modifiez les fichiers `.md` dans `src/` pour votre contenu
3. Les couleurs et thèmes sont dans `src/assets/css/main.css`

## 🌐 Déploiement GitHub Pages

Le site est configuré pour être déployé sur: `https://oj-gaudens.github.io/oj.gaudens/`

## 📱 Responsive

Le site est entièrement responsive et s'adapte aux mobiles, tablettes et desktop.
