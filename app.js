"use strict";
// const axios = require('axios');
// const cheerio = require('cheerio');
const {Builder, By, Key} = require('selenium-webdriver'),
// const chrome = require('selenium-webdriver/chrome');
const {Options} = require('selenium-webdriver/chrome'),

const google = {
    username = 'e.thoriumedia',
    password = '102030xx',
}
const everve = {
    website = "https://everve.net/",
    loginButton = "/html/body/header/div/div/div[3]/div/ul/li[1]/div/div/a/div/span[2]",
    skipTour = '/html/body/div[8]/div/div[5]/a[1]',
}
const login = {
    website = "https://www.accounts.google.com/",
    inputName = "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input",
    inputPassword = "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input",
    SubmitName = "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/span",
    SubmitPassword = "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/span/span",
    titleSuccessed = "Cuenta de Google",
    LoginGoogle = function(){
        async () => {
            try
            {
                await driver.get(login.website)
                console.log('waiting 3 seconds')
                await driver.sleep(3000)
                console.log('ingresando usuario')
                await driver.findElement(By.xpath(login.inputName)).sendKeys(google.username)
                console.log('ingresando contraseña')
                await driver.findElement
                await driver.findElement(By.xpath(login.inputPassword)).sendKeys(google.password)
                console.log('clicking login button')
                await driver.findElement(By.X)
                console.log()

                
                

            }
            finally
            {

            }
        }
    }
}
// const width = 375,
    // height = 667,

// var options = new chrome.Options()<
// const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build()
// options.addArguments(`--test-type --incognito --start-maximized --use-mobile-user-agent=true`)
const driver = new Builder()
.forBrowser('chrome')
.setChromeOptions(new Options('--start-maximized'))
// .windowSize({width, height})
// .setMobileEmulation({deviceName: 'Nexus 5X'}))
.build()
(async () => {
    try
    {
        console.log(`entrando al sitio ${website}`)
        await driver.get(`${website}${loginURL}`)
        console.log(`waiting 3 seconds`)
        await driver.sleep(3000)
        console.log(`ingresando usuario`)
        await driver.findElement(By.name('username')).sendKeys(username), Key.RETURN
        console.log(`ingresando contraseña`)
        await driver.findElement(By.name('password')).sendKeys(password), Key.RETURN
        console.log(`clicking login button`)
        await driver.findElement(By.xpath(loginButton)).click()
        console.log(`waiting 3 seconds`)
        await driver.sleep(5000)
        console.log('going to: ' + accountToFollow)
        await driver.navigate().to(`${website}${accountToFollow}`)
        var cantidad = await driver.findElement(By.xpath(followersCantidad)).getText()
        cantidad = parseInt(cantidad)
        const veces = Math.ceil(cantidad / 20 + 2)
        console.log('click in followers')
        await driver.findElement(By.xpath(followersButton)).click()
        console.log('waiting 3 seconds')
        await driver.sleep(3000)
        for(let i=0;i<veces;i++)
        {
            console.log('scrolling ' + i)
            await driver.findElement(By.tagName('body')).sendKeys(Key.END)
            await driver.sleep(3000)
        }
        classname = 'sqdOP  L3NKy   y3zKF     '
        console.log('guardando cuentas a seguir')
        const obj = await driver.findElements(By.xpath('//a[@class="FPmhX notranslate _0imsa "]'))
        console.log("recogiendo usernames")
        for(let i=0;i<obj.length;i++)
        {
            followers.push(await obj[i].getText())
            followers.push(
                {
                    "username": await obj[i].getText(),
                    "followerStatus": false,
                    "date": "00/00/00"
                }
            )
            console.log('cuenta insertada: ' + followers[i])
        }
        console.log(followers)
        console.log(`${username} tiene ${followers.length}`)
        console.log(`seguidores ${cantidad}`)
    }
    finally
    {
        driver.quit()
    }
})().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err))