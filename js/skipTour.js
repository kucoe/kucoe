var webdriver = require ('selenium-webdriver'),
    By = webdriver.By, 
    until = webdriver.until;

    async function skipTour() {
	let driver = new webdriver.Builder().forBrowser('chrome').build();
	await driver.get('https://kucoe.net');
    await driver.sleep(7000);
    await driver.findElement(By.css(".introjs-skipbutton")).click();
    await driver.quit();
    }

    skipTour().then(_ => console.log('SUCCESS!'), e => console.error('FAILURE: ' + e));
    
