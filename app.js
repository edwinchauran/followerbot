"use strict";
// const axios = require('axios');
// const cheerio = require('cheerio');
const {Builder,  By, Capabilities} = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/chrome')
const userProfilePath = "C:/Users/Edwin/AppData/Local/Google/Chrome/User Data";
const chromeCapabilities = Capabilities.chrome();
const assert = require('assert');
const width = 375, height = 667;
//Setting chrome options
chromeCapabilities.set("goog:chromeOptions", {
  args: [
      "--lang=en",
      "disable-infobars",
      "--start-maximized",
      `user-data-dir=${userProfilePath}`
  ]
});

const options = new Options()
// options.addArguments("--start-maximized user-data-dir=c:/Users/Edwin/AppData/Local/Google/Chrome/User Data/");
const driver = new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    // .windowSize({width, height})
    .build();

    const google = {
        username : 'e.thoriumedia',
        password : '102030xx',
    };
    const login = {
        website : "https://accounts.google.com/",
        inputName : "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input",
        inputPassword : "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input",
        SubmitName : "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/span",
        SubmitPassword : "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/span/span",
        titleSuccessed : "Cuenta de Google"
    };
    const everve = {
        website : "https://everve.net/tasks/youtube-subscribes/",
        // loginButton : "/html/body/header/div/div/div[3]/div/ul/li[1]/div/div/a/div/span[2]",
        skipTour : '/html/body/div[8]/div/div[5]/a[1]',
        task : '//html/body/div[4]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/a',
        next : '//*[@id="next_button"]/button',
        subscribe : '.style-scope .yt-button-renderer .style-blue-text .size-default'
    };
async function start(){
    try
    {
        await driver.get(everve.website)
        const originalWindow = await driver.getWindowHandle();
        assert((await driver.getAllWindowHandles()).length === 1);
        await driver.sleep(4000)

        await driver.findElement((By.xpath(everve.task) )).click()

        //Wait for the new window or tab
        await driver.wait(
            async () => (await driver.getAllWindowHandles()).length === 2,
            15000
            );
            //Loop through until we find a new window handle
            var windows = await driver.getAllWindowHandles();
            windows.forEach(async handle => {
            if (handle !== originalWindow) {
                await driver.switchTo().window(handle);
            }
            });
        // await driver.sleep(15000)
        await driver.findElement((By.css(everve.subscribe) )).click()
        await driver.sleep(2000)
        await driver.close();
        //Loop through until we find a new window handle
        windows = await driver.getAllWindowHandles();
        windows.forEach(async handle => {
        if (handle == originalWindow) {
            await driver.switchTo().window(handle);
        }
        });
        await driver.sleep(10000)
        await driver.findElement((By.xpath(everve.next) )).click()
        await driver.sleep(10000)

        // await driver.findElement(By.xpath(everve.skipTour)).click()
        // await driver.get(login.website)
        // console.log('ingresando usuario')
        // await driver.findElement(By.xpath(login.inputName)).sendKeys(google.username)
        // console.log('clicking login button')
        // await driver.findElement(By.xpath(login.SubmitName)).click()
        // console.log('waiting 3 seconds')
        // await driver.sleep(5000)
        // console.log('ingresando contraseña')
        // await driver.findElement(By.xpath(login.inputPassword)).sendKeys(google.password)
        // console.log('clicking login button')
        // await driver.findElement(By.xpath(login.SubmitPassword)).click()
        // console.log('waiting 3 seconds')
        // await driver.sleep(3000)
    }
    finally
    {
        driver.quit();
    }
}
start()
.then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));

// (async () => {
//     try
//     {
//         console.log(`entrando al sitio ${website}`)
//         await driver.get(`${website}${loginURL}`)
//         console.log(`waiting 3 seconds`)
//         await driver.sleep(3000)
//         console.log(`ingresando usuario`)
//         await driver.findElement(By.name('username')).sendKeys(username), Key.RETURN
//         console.log(`ingresando contraseña`)
//         await driver.findElement(By.name('password')).sendKeys(password), Key.RETURN
//         console.log(`clicking login button`)
//         await driver.findElement(By.xpath(loginButton)).click()
//         console.log(`waiting 3 seconds`)
//         await driver.sleep(5000)
//         console.log('going to: ' + accountToFollow)
//         await driver.navigate().to(`${website}${accountToFollow}`)
//         var cantidad = await driver.findElement(By.xpath(followersCantidad)).getText()
//         cantidad = parseInt(cantidad)
//         const veces = Math.ceil(cantidad / 20 + 2)
//         console.log('click in followers')
//         await driver.findElement(By.xpath(followersButton)).click()
//         console.log('waiting 3 seconds')
//         await driver.sleep(3000)
//         for(let i=0;i<veces;i++)
//         {
//             console.log('scrolling ' + i)
//             await driver.findElement(By.tagName('body')).sendKeys(Key.END)
//             await driver.sleep(3000)
//         }
//         classname = 'sqdOP  L3NKy   y3zKF     '
//         console.log('guardando cuentas a seguir')
//         const obj = await driver.findElements(By.xpath('//a[@class="FPmhX notranslate _0imsa "]'))
//         console.log("recogiendo usernames")
//         for(let i=0;i<obj.length;i++)
//         {
//             followers.push(await obj[i].getText())
//             followers.push(
//                 {
//                     "username": await obj[i].getText(),
//                     "followerStatus": false,
//                     "date": "00/00/00"
//                 }
//             )
//             console.log('cuenta insertada: ' + followers[i])
//         }
//         console.log(followers)
//         console.log(`${username} tiene ${followers.length}`)
//         console.log(`seguidores ${cantidad}`)
//     }
//     finally
//     {
//         driver.quit()
//     }
// })().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err))