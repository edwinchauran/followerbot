"use strict";
// const axios = require('axios');
// const cheerio = require('cheerio');
const {Builder, By, Key} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
const {Options} = require('selenium-webdriver/chrome');
const width = 375;
const height = 667;
const website = 'https://www.instagram.com/';
const loginURL = 'accounts/login/?source=auth_switcher';
const username = "edwinvisuales";
const password = "Maricafe4?? 102030ii";
const accountToFollow = 'edwinvisuales';
const loginButton = '//section/main/article/div/div/div/form/div[7]/button';
const followersButton = '//section/main/div/ul/li[2]/a/span';
const followersCantidad = '//section/main/div/ul/li[2]/a/span';
var followers = [];

// var options = new chrome.Options();<
// const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();
// options.addArguments(`--test-type --incognito --start-maximized --use-mobile-user-agent=true`);
const driver = new Builder()
.forBrowser('chrome')
.setChromeOptions(new Options('--start-maximized')
.windowSize({width, height})
.setMobileEmulation({deviceName: 'Nexus 5X'}))
.build();
(async () => {
    try
    {
        console.log(`entrando al sitio ${website}`);
        await driver.get(`${website}${loginURL}`);
        console.log(`waiting 3 seconds`);
        await driver.sleep(3000);
        console.log(`ingresando usuario`);
        await driver.findElement(By.name('username')).sendKeys(username), Key.RETURN;
        console.log(`ingresando contraseña`);
        await driver.findElement(By.name('password')).sendKeys(password), Key.RETURN;
        console.log(`clicking login button`);
        await driver.findElement(By.xpath(loginButton)).click();
        console.log(`waiting 3 seconds`);
        await driver.sleep(5000);
        console.log('going to: ' + accountToFollow);
        await driver.navigate().to(`${website}${accountToFollow}`);
        var cantidad = await driver.findElement(By.xpath(followersCantidad)).getText();
        cantidad = parseInt(cantidad);
        const veces = Math.ceil(cantidad / 20 + 2);
        console.log('click in followers');
        await driver.findElement(By.xpath(followersButton)).click();
        console.log('waiting 3 seconds');
        await driver.sleep(3000);
        for(let i=0;i<veces;i++)
        {
            console.log('scrolling ' + i)
            await driver.findElement(By.tagName('body')).sendKeys(Key.END);
            await driver.sleep(3000);
        }
        // classname = 'sqdOP  L3NKy   y3zKF     '
        console.log('guardando cuentas a seguir');
        const obj = await driver.findElements(By.xpath('//a[@class="FPmhX notranslate _0imsa "]'));
        console.log("recogiendo usernames")
        for(let i=0;i<obj.length;i++)   
        {
            // followers.push(await obj[i].getText());
            followers.push(
                {
                    "username": await obj[i].getText(),
                    "followerStatus": false,
                    "date": "00/00/00"
                }
            );
            console.log('cuenta insertada: ' + followers[i]);
        }
        console.log(followers);
        console.log(`${username} tiene ${followers.length}`);
        console.log(`seguidores ${cantidad}`);
    }
    finally
    {
        driver.quit();
    }
})().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));
