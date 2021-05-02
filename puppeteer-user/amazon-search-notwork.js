/**
 * @name Amazon search
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require('puppeteer')
const screenshot = 'amazon_nyan_cat_pullover.png'
try {
  (async () => {
    const browser = await puppeteer.launch({
      headless: true
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.co.jp/')
    await page.type('#nav-search-bar-form', 'nyan cat pullover')
    await page.click('input.nav-input')
    await page.screenshot({ path: screenshot })
    console.log('See screenshot: ' + screenshot)
  })()
} catch (err) {
  console.error(err)
}