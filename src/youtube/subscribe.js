var {Builder,  By, Capabilities} = require('selenium-webdriver')
var {Options} = require('selenium-webdriver/chrome');
var everve = require('./datos/d-subscribe.js');
var assert = require('assert');
var l = '>>>>>>';
var chromeCapabilities = Capabilities.chrome();

module.exports =
{
    subscribe : async function(intentos, userData)
    {
        chromeCapabilities.set("goog:chromeOptions",
        {
            args: [
                "--lang=es",
                "disable-infobars",
                // "--start-maximized",
              `--window-size=1024,600`,
                `user-data-dir=C:/Users/${userData}/AppData/Local/Google/Chrome/User Data`
            ]
        })
        var options = new Options();
        var driver = new Builder()
        .forBrowser('chrome')
        .withCapabilities(chromeCapabilities)
        .build();
        try
        {
            for (var i = 1; i <= intentos; i++) {
                                                                                        console.log(l + ' tarea ' + i + ' de ' + intentos)
                                                                                        console.log(`${l} entrando a ${everve.url.subscribe}`)
                //going to website
                await driver.get(everve.url.subscribe)
                .catch((e)=> console.log(l + ' error en la linea:' + '88 '))

                //registro del dashboard
                var originalWindow = await driver.getWindowHandle();
                assert((await driver.getAllWindowHandles()).length === 1);

                console.log(l + 'esperando 4 segundos')
                await driver.sleep(4000)
                .catch((e)=> console.log(l + ' error en la linea:' + '94 '))
              //   var currentTitle = await driver.getTitle();
                console.log("verificando que haya internet")
              //   comprobarInternet('dashboard');
              var verga = await driver.findElement((By.xpath('//*[@id="order_completed"]/div/div/div/div/h6/b'))).getText();
              if(verga == 'Awesome!')
              {
                  console.log('No hay tareas disponibles sobre suscriciones')
                  driver.quit();
                //   vistas();
                  break;
              }
                await driver.findElement((By.xpath(everve.task) )).click()
                //Wait for the new window or tab
                await driver.wait(
                    async () => (await driver.getAllWindowHandles()).length === 2,
                    15000
                    ).catch((e)=> { driver.quit(); suscribir()});
                    //Cambiar a youtube
                    var windows = await driver.getAllWindowHandles();
                    windows.forEach(async handle => {
                        if (handle !== originalWindow) {
                            await driver.switchTo().window(handle);
                                                                                    console.log(l + ' cambiando de tab')
                        }
                    });
                                                                                    console.log(l + ' suscribiendo')
                // Suscribiendo
                await driver.sleep(10000)
                .catch((e)=> console.log(l + ' error en la linea:' + '123 '))

                var tituloYoutube = await driver.getTitle()
                var youtubeTitle = tituloYoutube.substr(tituloYoutube.length - 7);
                console.log("verificando que haya internet")
              //   comprobarInternet('youtube');
                await driver.findElement((By.css(everve.subscribe) )).click()
                .catch(async (err) => {
                    console.log(l+' Ya estas suscrito')
                  })
                  .then(async () => {
                      console.log(l + ' cerrando tab')
                      await driver.sleep(2000)
                    await driver.close();
                    //cambiar a dashboard
                    windows = await driver.getAllWindowHandles();
                    windows.forEach(async handle => {
                        if (handle == originalWindow) {
                            console.log(l + 'cambiando de tab')
                            await driver.switchTo().window(handle);
                        }
                    })
                                                                                    console.log(l + ' esperando 15 segundos')
                    await driver.sleep(10000)
                })
                .then(_ => console.log('SUCCESS'), err => console.error('>>>>Hubo un error'));
                // .then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));
            }
        }
        finally
        {
            await driver.quit()
            .then(_ => console.log('SUCCESS'), err => console.error('>>>>Hubo un error'));
        }
    }
}