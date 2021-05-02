
const puppeteer = require('puppeteer')
// const screenshotDir = '/home/pptruser/';
const screenshot = 'example.png';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-dev-shm-usage'
    ]
  })

  try {
    const page = await browser.newPage()
    await page.goto('https://www.amazon.co.jp/')
    await page.type('#twotabsearchtextbox', 'nyan cat')
    await page.click('#nav-search-submit-button')
    await page.waitForNavigation()
    await page.screenshot({ path: screenshot, fullPage: true })
    console.log('See screenshot: ' + screenshot)
  } catch (e) {
    console.error(e)
  } finally {
    browser.close()
  }
})()
