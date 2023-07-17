const fs = require('fs');

const filePath = './dist/vistas-angular/index.html'; // Ruta al archivo index.html generado en la carpeta de distribución

const fileContent = fs.readFileSync(filePath, 'utf8');
const updatedContent = fileContent.replace('<base href="/">', '<base href="https://bryanxgarcia.github.io/FrontGoldeElegance">');

fs.writeFileSync(filePath, updatedContent, 'utf8');
