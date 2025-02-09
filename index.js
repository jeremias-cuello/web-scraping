import puppeteer from "puppeteer";
import fs from "fs";

const PATH_OUT = './output/products.json';

try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://books.toscrape.com/');

    const results = await page.evaluate(() => {

        const wordToNumber = w => ['One', 'Two', 'Three', 'Four', 'Five'].indexOf(w) + 1;

        function getDataProduct(product){
            const { title } = product.querySelector("[title]");
            const price = product.querySelector("[class='price_color']").innerText;
            const stars = wordToNumber(
                product.querySelector(".star-rating").classList[1] // La segunda clase es cantidad de stars
            );
            const stock = product.querySelector('.availability').classList.contains('instock');

            return {
                title,
                price,
                stars,
                stock
            }
        }

        const productsHTML = $("article[class='product_pod']");
        const products = Array.from(productsHTML, getDataProduct);

        return products;
    })

    await browser.close();

    fs.writeFileSync(
        PATH_OUT,
        JSON.stringify(results, null, 4)
    );

} catch (error) {
    console.error(error);
}
