const puppeteer = require('puppeteer');

const username = 'your_username';
const password = 'your_password';

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://demoqa.com/login');

  await page.type('VanshajB10', username);
  await page.type('Vanshaj@1002*', password);
  await page.click('#login');
  await page.waitForNavigation();

})();
