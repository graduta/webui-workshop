const mocha = require('mocha')
const puppeteer = require('puppeteer')
const assert = require('assert');
const { spawn } = require('node:child_process');

describe('Browser', () => {
    let browser;
    let process;
    let page;
    let subprocessOutput = '';

    const url = 'http://localhost:8080';

    before(async () => {
        process = spawn('node', ['index.js'], {cwd: './'});
        
        process.stdout.on('data', (chunk) => {
            subprocessOutput += chunk.toString();
          });
        process.stderr.on('data', (chunk) => {
            subprocessOutput += chunk.toString();
        });
        
        this.ok = true;
        browser = await puppeteer.launch({headless: 'new'});
        page = await browser.newPage() 

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
    })

    it('should be able to show index page', async () => {
        for (let i = 0; i < 10; i++) {
            // wait until server is ready
            try {
                await page.goto(url)
            } catch(e) {
                if (e.message.includes('net::ERR_CONNECTION_REFUSED')) {
                    await new Promise((done) => setTimeout(done, 500))
                    continue
                }
                throw(e)
            }
        }
    })

    it('should display a button with correct classlist', async () => {
        await page.waitForSelector('body > div > div:nth-child(2)', {timeout: 5000})
;
        const aboutButtonClassList = await page.evaluate(() => 
            document.querySelector('body > div > div:nth-child(2)').classList)

        assert.deepStrictEqual(aboutButtonClassList, {0: 'btn'})
    })

    // This is broken for now :(
    // it('should display a button when clicked navigates to the about page', async () => {
    //     await page.waitForSelector('body > div > div:nth-child(2)', {timeout: 5000})
    //     await page.evaluate(() => document.querySelector('body > div > div:nth-child(2)').click(), {timeout: 5000});
    //     await page.waitForNavigation({timeout: 5000});
    //     const location = await page.evaluate(() => window.location)
    //     assert.equal(location, '?page=about')
    // })

    after(async () => {
        await browser.close();
        console.log('---------------------------------------------');
        console.log('Output of server logs for the previous tests:');
        console.log('---------------------------------------------');
        console.log(subprocessOutput);
        console.log('---------------------------------------------');
        process.kill();
      });
})
