async function vistas(){
    try{
        for (let i = 1; i <= intentos; i++) {
            console.log(l + ' tarea ' + i + ' de ' + intentos)
                console.log(l+' entrando al sitio')
            //going to website
            await driver.get(everve.url.view)
            // .catch((e)=> console.log(l + ' error en la linea:' + '    '))

            //registro del dashboard
            let originalWindow = await driver.getWindowHandle();
            assert((await driver.getAllWindowHandles()).length === 1);

            console.log(l + 'esperando 4 segundos')
            await driver.sleep(8000)
            .catch((e)=> console.log(l + ' error en la linea:' + '94 '))
            // let currentTitle = await driver.getTitle();
            // console.log("verificando que haya internet")
            //   comprobarInternet('dashboard');
            let verga = await driver.findElement((By.xpath('//*[@id="order_completed"]/div/div/div/div/h6/b'))).getText();
            if(verga == 'Awesome!')
            {
            console.log('No hay tareas disponibles sobre suscriciones')
            break;
            }
            await driver.findElement((By.xpath(everve.viewButtons.viewVideo) )).click()
            //Wait for the new window or tab
            await driver.wait(
            async () => (await driver.getAllWindowHandles()).length === 2,
            15000
            ).catch((e)=> { driver.quit(); subcriciones()});
            //Cambiar a youtube
            let windows = await driver.getAllWindowHandles();
            windows.forEach(async handle => {
            if (handle !== originalWindow) {
            await driver.switchTo().window(handle);
            console.log(l + ' cambiando de tab');
            }
            });
            // esperando 60segundos
            console.log()
            for (let i = 1; i < 40; i++) {
                console.log('esperando ' + i + ' segs')
                await driver.sleep(1000)
                .catch((e)=> console.log(l + ' error en la linea:' + '123 '))
            }
            console.log(l + ' cerrando tab')
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
            .then(_ => console.log('SUCCESS'), err => console.error('>>>>Hubo un error'));
        }
    }
    finally {
        driver.quit();
    }
}