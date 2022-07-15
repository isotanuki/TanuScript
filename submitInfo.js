require('chromedriver');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome')

const { setTimeout } = require('timers/promises');
const fs = require('fs');
const {parse} = require('csv-parse/sync');
const data = fs.readFileSync('./csv/selectionsale2022.csv');
const records = parse(data, {columns: true});

const email = "TanuScript"

const listedNo = process.argv[3];
const record = records.find(e => e["上場No."] == listedNo);
console.log(record.馬名);

if (record && record.馬名 != "欠場"){
    const options = new chrome.Options()
 	.headless()
    .excludeSwitches('enable-logging');
    const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
    const threadNo = process.argv[2];
    const URL = 'https://may.2chan.net/b/res/' + threadNo + '.htm'

    const comment = record.コメント;
    const listedNoStr = listedNo.padStart(4,'0');
    const path = 'C:/Users/panze/Desktop/TanuScript/picture/selectionsale2022/' + listedNoStr + '.jpg'
    
    driver
        .get(URL)
        .then(() =>{
            driver.manage().addCookie({name:'posttime', value: '1592964385393'});
            driver.manage().addCookie({name:'pwdc', value: '92464093'});
            driver.manage().addCookie({name:'catviews', value: '987539552-987519023/'});
            driver.manage().addCookie({name:'cxyl', value: '14x50x4x0x0'});
            driver.manage().addCookie({name:'namec', value: ''});
            driver.manage().addCookie({name:'reszc', value: '0'});
            driver.manage().addCookie({name:'scrl', value: ''});
        })
        .then(() =>
            driver.findElement(By.name('email')).sendKeys(email)
        )
        .then(() =>
            driver.findElement(By.name('com')).sendKeys(comment)
        )
        .then(() =>
            driver.findElement(By.name('upfile')).sendKeys(path)
        )
        .then(() =>
            driver.executeScript('return ptfk(' + threadNo + ')')
        )
        .then(() =>
            setTimeout(1000)
        )
        .then(() => 
            driver.findElement(By.id('retmestip'))
        )
        .then((el) => 
            driver.wait(until.elementTextIs(el, ''), 10000)
        )
        .then(() => 
            console.log("上場番号" + listedNo + "を投稿しました。")
        )
        .catch((e) => {
            console.error("上場番号" + listedNo + "　エラーが発生しました！");
            console.error(e.stack);
        })
        .finally(() => {
            driver.quit()
        });
} else {
    console.log("上場番号" + listedNo + "は欠場のためスキップしました。" )
}

