import { readdir } from 'fs';
import { join, parse } from 'path';
import sharp from 'sharp';

const inputFolder = '../assets';
const outputFolder = '../processed_assets';

readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('Error llegint la carpeta:', err);
        return;
    }

    files.forEach(file => {
        const inputPath = join(inputFolder, file);
        const outputName = parse(file).name;

        if (!/\.(jpg|jpeg|png)$/i.test(file)) return;

        // Generar miniatura
        sharp(inputPath)
            .resize(150) // Amplada de la miniatura
            .toFile(join(outputFolder, `${outputName}-thumbnail.jpg`))
            .then(() => console.log(`Miniatura creada per: ${file}`))
            .catch(err => console.error(`Error creant miniatura per ${file}:`, err));

        // Convertir a WebP
        sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(join(outputFolder, `${outputName}.webp`))
            .then(() => console.log(`Convertit a WebP: ${file}`))
            .catch(err => console.error(`Error convertint a WebP per ${file}:`, err));

        // Convertir a AVIF
        sharp(inputPath)
            .avif({ quality: 50 })
            .toFile(join(outputFolder, `${outputName}.avif`))
            .then(() => console.log(`Convertit a AVIF: ${file}`))
            .catch(err => console.error(`Error convertint a AVIF per ${file}:`, err));
    });
});
