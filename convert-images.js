import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "src/images/original";
const outputDir = "src/images/optimized";

// Crear carpeta de sortida si no existeix
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Imatges responsives
const responsiveImages = [
  "collbato.jpg",
  "escalada-montserrat.jpg",
  "escalada.jpeg",
  "festa-major.jpg",
  "fira-artesania.jpg",
  "fira-de-nadal.jpeg",
  "gastronomia.jpg",
  "hotel.jpeg",
  "panoramica-montserrat.jpeg",
  "restaurant.jpg",
  "rutes-cavall.jpg",
  "salnitrats.jpeg",
  "senderisme.jpg",
  "collbato-panoramica.webp",
];

// Iconos/logos
const icons = [
  "facebook.icon.png",
  "instagram_icon.png",
  "twitter_icon.png",
  "logo-ajuntament-collbato.jpeg",
  "favicon.ico.png",
];

// Convertir imatges
responsiveImages.forEach((image) => {
  const name = path.parse(image).name;
  [400, 800, 1600].forEach((width) => {
    sharp(path.join(inputDir, image))
      .resize({ width })
      .toFormat("webp", { quality: 80 })
      .toFile(path.join(outputDir, `${name}-${width}.webp`))
      .then(() => console.log(`✔ ${name}-${width}.webp`))
      .catch((err) => console.error(`❌ Error con ${image}: ${err.message}`));
  });
});

// Convertir iconos/logos
icons.forEach((image) => {
  const name = path.parse(image).name;
  sharp(path.join(inputDir, image))
    .toFormat("webp", { quality: 70 })
    .toFile(path.join(outputDir, `${name}.webp`))
    .then(() => console.log(`✔ ${name}.webp`))
    .catch((err) => console.error(`❌ Error con ${image}: ${err.message}`));
});
