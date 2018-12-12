const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Kucoe Tour Test', () => {
    const driver = global.driver
        ? global.driver
        : new Builder().forBrowser('chrome').build();

        it('tests Skip button and Help button', async () => {
            await driver.get('https://kucoe.net');
            await driver.sleep(3000);
            await driver.findElement(By.css(".introjs-skipbutton")).click();
            await driver.sleep(500);
            await driver.findElement(By.css(".help")).click();
        });
 
        it('tests Next buttons', async () => {
            for (i=0; i<5; i++)
            {
                await driver.findElement(By.css(".introjs-nextbutton")).click();
                await driver.sleep(500);
            }
        });

        it('tests Back buttons', async () => {
            for (i=0; i<3; i++)
            {
                await driver.findElement(By.css(".introjs-prevbutton")).click();
                await driver.sleep(500);
            }          
        });

    after(async () => driver.quit());
});