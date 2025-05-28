// Fonction pour détecter la langue de l'utilisateur
function detectUserLanguage() {
    // Récupérer la langue du navigateur
    const browserLang = navigator.language || navigator.userLanguage;
    // Extraire le code de langue principal (ex: 'fr-FR' -> 'fr')
    const lang = browserLang.split('-')[0];
    // Vérifier si la langue est supportée, sinon utiliser l'anglais
    return translations[lang] ? lang : 'en';
}

// Fonction pour traduire le contenu
function translateContent(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Mettre à jour la langue du document
    document.documentElement.lang = lang;
}

// Initialiser la traduction
const userLang = detectUserLanguage();
translateContent(userLang);

const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const gridCanvas = document.getElementById('gridCanvas');
const ctx = gridCanvas.getContext('2d');
const rowsInput = document.getElementById('rows');
const columnsInput = document.getElementById('columns');
const gridColorInput = document.getElementById('gridColor');
const applyGridBtn = document.getElementById('applyGrid');
const downloadBtn = document.getElementById('downloadImage');

let originalImage = null;

imageUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imagePreview.src = event.target.result;
            imagePreview.onload = function() {
                imagePreview.style.display = 'block';
                gridCanvas.width = imagePreview.width;
                gridCanvas.height = imagePreview.height;
                originalImage = new Image();
                originalImage.src = event.target.result;
                drawGrid();
            };
        };
        reader.readAsDataURL(file);
    }
});

function drawGrid() {
    if (!originalImage) return;
    
    ctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);
    ctx.drawImage(originalImage, 0, 0, gridCanvas.width, gridCanvas.height);
    
    const rows = parseInt(rowsInput.value);
    const columns = parseInt(columnsInput.value);
    const color = gridColorInput.value;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    
    // Dessiner les lignes horizontales
    for (let i = 1; i < rows; i++) {
        const y = (gridCanvas.height / rows) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(gridCanvas.width, y);
        ctx.stroke();
    }
    
    // Dessiner les lignes verticales
    for (let i = 1; i < columns; i++) {
        const x = (gridCanvas.width / columns) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, gridCanvas.height);
        ctx.stroke();
    }
}

applyGridBtn.addEventListener('click', drawGrid);

rowsInput.addEventListener('change', drawGrid);
columnsInput.addEventListener('change', drawGrid);
gridColorInput.addEventListener('change', drawGrid);

downloadBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'image-avec-grille.png';
    link.href = gridCanvas.toDataURL();
    link.click();
}); 