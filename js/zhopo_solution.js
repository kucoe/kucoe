var webdriver = require ('selenium-webdriver'),
    By = webdriver.By, 
    until = webdriver.until;

	async function tourWalk() {
		let driver = new webdriver.Builder().forBrowser('chrome').build();
		await driver.get('https://kucoe.net');
		await driver.sleep(4000);
		while (driver.findElement(By.css(".introjs-nextbutton")))
			{
				await driver.findElement(By.css(".introjs-nextbutton")).click();
				await driver.sleep(700);
			}
		await driver.findElement(By.css(".introjs-skipbutton")).click();
		}

	tourWalk().then(_ => console.log('SUCCESS!'), e => console.error('FAILURE: ' + e));

//introjs-button introjs-nextbutton introjs-prevbutton

async function walkBackTour() {
	let driver = new webdriver.Builder().forBrowser('chrome').build();
	await driver.get('https://kucoe.net');
	await driver.sleep(4000);
	while (driver.findElement(By.css(".introjs-nextbutton")))
		{
			await driver.findElement(By.css(".introjs-nextbutton")).click();
			await driver.sleep(700);
		}
	while (driver.findElement(By.css(".introjs-prevbutton")))
		{
			await driver.findElement(By.css(".introjs-prevbutton")).click();
			await driver.sleep(700);
		}
	}

walkBackTour().then(_ => console.log('SUCCESS!'), e => console.error('FAILURE: ' + e));

/*
от додумав ще клікання кнопок "назад", 
Для цього юзається ціла функція кліканняВперед...її тре якось навчитись викликати, а не переписувати:)
*/