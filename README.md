# Web Scraping

Repositorio como ejemplo de una práctica de web scraping. Esta proyecto navega a una página para scrapear que simula ser una tienda web de libros, una vez visitado el sitio extrae todos los datos de los libros, precio, calificación de estrellas o si esta en stock o no.

## 🚀 Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/jeremias-cuello/web-scraping.git
   cd web-scraping
   ```
2. Instala las dependencias:

   ```sh
   npm install puppeteer
   ```

## ▶️ Uso

### **Ejecutar**

```sh
npm run start
```

## 📦 Dependencias

| Paquete   | Versión |
| --------- | ------- |
| puppeteer | ^24.2.0 |

Instala dependencias adicionales. ¡Cuidado! que este proyecto vuelvca toda la información a un archivo JSON y nodemon dispara la ejecución del código ante el evento del momento en que se guarda un archivo, procura que nodemon no se ejecute en loop

```sh
npm install nodemon --save-dev
```

## 📜 Scripts disponibles

- `npm start` → Inicia el servidor en producción.

## 📂 Estructura del proyecto

```sh
📦 web-scraping
├── 📂 output
│   └── products.json # Resultados del scraping
├── index.js          # Inicio de App
├── .gitignore
├── .editorconfig     # Configuración del editor de texto
├── package.json      # Dependencias y scripts
└── README.md         # Descripción del repositorio (este archivo)
```

## ✅ Contribución

1. [Haz un fork del repositorio.](https://github.com/jeremias-cuello/web-scraping/fork)
2. Crea una rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Sube los cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.
