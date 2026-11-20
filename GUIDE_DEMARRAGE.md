# 🚀 Guide de Démarrage Rapide

## Installation Rapide (5 minutes)

### 1. Prérequis
- Node.js 16+ installé sur votre machine
- Un éditeur de code (VS Code recommandé)

### 2. Installation

```bash
# Installer les dépendances
npm install
```

### 3. Personnalisation Immédiate

**IMPORTANT : Remplacez votre photo !**
- Allez dans `src/assets/images/`
- Remplacez `photo.jpg` par votre photo professionnelle
- Format : JPG ou PNG, taille recommandée : 500x500px

### 4. Lancer en développement

```bash
npm run dev
```

Ouvrez http://localhost:8080 dans votre navigateur

### 5. Modifier le contenu

Les fichiers à personnaliser sont dans `src/` :
- `index.md` - Page d'accueil
- `about.md` - À propos de vous
- `CV.md` - Votre CV
- `projects.md` - Vos projets
- `skills.md` - Vos compétences
- `experience.md` - Votre parcours
- `contact.md` - Vos coordonnées

### 6. Build pour production

```bash
npm run build
```

Les fichiers seront dans `docs/`

## 🎨 Personnalisation du Design

### Changer les couleurs

Éditez `src/assets/css/main.css` :

```css
:root {
  --accent-primary: #00d4ff;  /* Couleur principale */
  --bg-primary: #0a0e17;      /* Fond principal */
  /* ... autres variables ... */
}
```

### Changer le texte du terminal

Éditez `src/assets/js/theme.js` ligne 28 :

```javascript
const text = "Votre texte personnalisé ici";
```

## 🌐 Déploiement GitHub Pages

### Méthode automatique (recommandée)

1. Créez un repo GitHub : `oj.gaudens`
2. Poussez votre code :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/oj-gaudens/oj.gaudens.git
git push -u origin main
```

3. Activez GitHub Pages :
   - Allez dans Settings > Pages
   - Source : GitHub Actions
   - Le workflow `.github/workflows/deploy.yml` fera le reste !

4. Votre site sera sur : `https://oj-gaudens.github.io/oj.gaudens/`

### Build manuel

```bash
npm run build
# Uploadez le contenu de docs/ sur votre hébergeur
```

## 📱 Responsive

Le site s'adapte automatiquement :
- 📱 Mobile : Menu sur 2 lignes max
- 💻 Desktop : Menu sur une ligne
- La photo reste toujours en haut à gauche

## 🎯 Points Importants

✅ **La photo** apparaît dans une bulle séparée en haut à gauche
✅ **Les liens de navigation** restent sur la même ligne (max 2 lignes sur mobile)
✅ **Thème dark/light** avec bouton de bascule
✅ **Animation terminal** au chargement
✅ **100% responsive** et professionnel

## 🆘 Besoin d'aide ?

1. **La photo ne s'affiche pas** : Vérifiez que `src/assets/images/photo.jpg` existe
2. **Le site ne se lance pas** : Faites `npm install` puis `npm run dev`
3. **Erreur 404 sur GitHub Pages** : Vérifiez le `pathPrefix` dans `.eleventy.js`

## 🔧 Commandes utiles

```bash
npm run dev      # Développement avec hot reload
npm run build    # Build production
```

## 📝 Structure du projet

```
portfolio-improved/
├── src/
│   ├── _includes/
│   │   └── layout.njk          # Template principal
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css        # Styles
│   │   ├── js/
│   │   │   └── theme.js        # JavaScript
│   │   └── images/
│   │       └── photo.jpg       # VOTRE PHOTO ICI
│   ├── index.md                # Accueil
│   ├── about.md                # À propos
│   ├── CV.md                   # CV
│   ├── projects.md             # Projets
│   ├── skills.md               # Compétences
│   ├── experience.md           # Parcours
│   └── contact.md              # Contact
├── .eleventy.js                # Config Eleventy
├── package.json                # Dépendances
└── README.md                   # Documentation
```

Bonne chance avec votre portfolio ! 🚀
