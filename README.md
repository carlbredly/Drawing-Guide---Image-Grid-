# Guide de Dessin - Grille d'Image 🎨

## Description
Une application web moderne permettant d'ajouter une grille personnalisable sur vos images. Parfaite pour les artistes, les dessinateurs et tous ceux qui souhaitent créer des dessins précis.

## Fonctionnalités ✨
- Upload d'images
- Grille personnalisable (nombre de lignes et colonnes)
- Choix de la couleur de la grille
- Téléchargement de l'image avec la grille
- Interface multilingue (FR, EN, ES, DE)
- Design moderne et responsive

## Technologies Utilisées 🛠
- HTML5
- CSS3 (avec effets modernes et Glassmorphism)
- JavaScript (Vanilla)
- Canvas API

## Installation et Utilisation 🚀

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
```

2. Ouvrez le fichier `index.html` dans votre navigateur

3. Utilisez l'application :
   - Cliquez sur "Choisir une image" pour sélectionner votre image
   - Ajustez le nombre de lignes et de colonnes
   - Choisissez la couleur de la grille
   - Cliquez sur "Appliquer la grille"
   - Téléchargez l'image avec la grille

## Structure des Fichiers 📁
```
├── index.html          # Structure HTML
├── styles.css          # Styles CSS
├── script.js           # Logique JavaScript
├── translations.js     # Fichier de traductions
└── README.md          # Documentation
```

## Personnalisation 🎯

### Ajouter une Nouvelle Langue
Pour ajouter une nouvelle langue, modifiez le fichier `translations.js` :

```javascript
const translations = {
    'nouvelle-langue': {
        title: 'Titre traduit',
        chooseImage: 'Texte traduit',
        rows: 'Texte traduit',
        columns: 'Texte traduit',
        gridColor: 'Texte traduit',
        applyGrid: 'Texte traduit',
        downloadImage: 'Texte traduit'
    }
};
```

### Modifier le Style
Les variables CSS sont définies dans `styles.css` :

```css
:root {
    --primary-color: #6366f1;
    --primary-hover: #4f46e5;
    /* ... autres variables ... */
}
```

## Contribution 🤝
Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence 📄
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

# Drawing Guide - Image Grid 🎨

## Description
A modern web application that allows you to add a customizable grid to your images. Perfect for artists, illustrators, and anyone who wants to create precise drawings.

## Features ✨
- Image upload
- Customizable grid (rows and columns)
- Grid color selection
- Download image with grid
- Multilingual interface (FR, EN, ES, DE)
- Modern and responsive design

## Technologies Used 🛠
- HTML5
- CSS3 (with modern effects and Glassmorphism)
- JavaScript (Vanilla)
- Canvas API

## Installation and Usage 🚀

1. Clone the repository:
```bash
git clone [REPO_URL]
```

2. Open `index.html` in your browser

3. Use the application:
   - Click "Choose an image" to select your image
   - Adjust the number of rows and columns
   - Choose the grid color
   - Click "Apply grid"
   - Download the image with grid

## File Structure 📁
```
├── index.html          # HTML structure
├── styles.css          # CSS styles
├── script.js           # JavaScript logic
├── translations.js     # Translation file
└── README.md          # Documentation
```

## Customization 🎯

### Adding a New Language
To add a new language, modify the `translations.js` file:

```javascript
const translations = {
    'new-language': {
        title: 'Translated title',
        chooseImage: 'Translated text',
        rows: 'Translated text',
        columns: 'Translated text',
        gridColor: 'Translated text',
        applyGrid: 'Translated text',
        downloadImage: 'Translated text'
    }
};
```

### Modifying the Style
CSS variables are defined in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-hover: #4f46e5;
    /* ... other variables ... */
}
```

## Contributing 🤝
Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License 📄
This project is licensed under the MIT License. See the `LICENSE` file for details. 