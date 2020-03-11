const puppeteer = require('puppeteer');
const assert = require('assert');
const {spawn} = require('child_process');

// APIs:
// https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md
// https://mochajs.org/

// Tips:
// Network and rendering can have delays this can leads to random failures
// if they are tested just after their initialization.

describe('WebUI', function() {
  let browser;
  let page;
  let subprocess; // web-server runs into a subprocess
  let subprocessOutput = '';
  this.timeout(20000);
  this.slow(2000);
  const url = 'http://localhost:8080/';

  before(async () => {
    // Start web-server in background
    subprocess = spawn('node', ['index.js'], {stdio: 'pipe'});
    subprocess.stdout.on('data', (chunk) => {
      subprocessOutput += chunk.toString();
    });
    subprocess.stderr.on('data', (chunk) => {
      subprocessOutput += chunk.toString();
    });

    this.ok = true;
    // Start browser to test UI
    browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox'], headless: false});
    page = await browser.newPage();

    // Listen to browser
    page.on('error', pageerror => {
      console.error('        ', pageerror);
      this.ok = false;
    });
    page.on('pageerror', pageerror => {
      console.error('        ', pageerror);
      this.ok = false;
    });
    page.on('console', msg => {
      for (let i = 0; i < msg.args().length; ++i) {
        console.log(`        ${msg.args()[i]}`);
      }
    });
  });

  it('should load first page "/"', async () => {
    // try many times until backend server is ready
    for (let i = 0; i < 10; i++) {
      try {
        await page.goto(url, {waitUntil: 'networkidle0'});
        break; // connection ok, this test passed
      } catch (e) {
        if (e.message.includes('net::ERR_CONNECTION_REFUSED')) {
          await new Promise((done) => setTimeout(done, 500));
          continue; // try again
        }
        throw e;
      }
    }
  });

  it('should successfully display About button with correct text and title and style', async () => {
    await page.waitForSelector('body > div > div:nth-child(2) > div > button', {timeout: 5000});
    const aboutButtonTitle = await page.evaluate(() => document.querySelector('body > div > div:nth-child(2) > div > button').title);
    const aboutButtonInnerText = await page.evaluate(() => document.querySelector('body > div > div:nth-child(2) > div > button').innerText);
    const aboutButtonClassList = await page.evaluate(() => document.querySelector('body > div > div:nth-child(2) > div > button').classList);
    assert.strictEqual(aboutButtonInnerText.trim(), 'About');
    assert.strictEqual(aboutButtonTitle, 'About');
    assert.deepStrictEqual(aboutButtonClassList, {0: 'btn', 1: 'btn-primary'});
  });

  it('should successfully click on About button', async () => {
    await page.waitForSelector('body > div > div:nth-child(2) > div > button', {timeout: 5000});
    await page.evaluate(() => document.querySelector('body > div > div:nth-child(2) > div > button').click());
    await page.waitFor(200);
    const location = await page.evaluate(() => window.location);
    assert.strictEqual(location.search, '?page=about')
  });

  after(async () => {
    await browser.close();
    console.log('---------------------------------------------');
    console.log('Output of server logs for the previous tests:');
    console.log('---------------------------------------------');
    console.log(subprocessOutput);
    console.log('---------------------------------------------');
    subprocess.kill();
  });
});
