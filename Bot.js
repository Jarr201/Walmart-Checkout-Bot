const puppeteer = require('puppeteer');

const product_url = "https://www.walmart.com/ip/PNY-GeForce-RTX-4070-Ti-12GB-XLR8-Gaming-GPU-VERTO-EPIC-X-RGB-Triple-Fan-Graphics-Card-Nvidia-DLSS-3/1772848287?fulfillmentIntent=Shipping&athbdg=L1600"

async function givePage() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    console.log('Page Pulled Up')
    return page;
}

async function addToCart(page) {
    await page.goto(product_url);
}

async function checkout() {
    var page = await givePage();
    await addToCart(page);
}

checkout()