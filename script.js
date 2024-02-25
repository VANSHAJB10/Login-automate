const puppeteer = require('puppeteer');

const username = 'your_username';
const password = 'your_password';

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://demoqa.com/login');

  await page.type('#userName', 'VanshajB10');
  await page.type('#password', 'Vanshaj@1002*');
  await page.click('#login');
  
  await page.waitForNavigation();

})();
