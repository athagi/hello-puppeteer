/**
 * @name Amazon search
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require('puppeteer')
const screenshotDir = '/screenshot/';
const screenshot = screenshotDir + 'amazon_nyan_cat_pullover.png'
try {
  let browser;
  (async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.co.jp/')
    await page.type('#twotabsearchtextbox', 'nyan cat pullover')
    await page.click('#nav-search-submit-button')
    await page.waitForNavigation()
    await page.screenshot({ path: screenshot, fullPage: true })
    console.log('See screenshot: ' + screenshot)
    console.log("succeeded")
    browser.close();
  })()
} catch (err) {
  console.error(err)
}