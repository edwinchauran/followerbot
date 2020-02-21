function comprobarInternet(e){
    if(e == 'dashboard')
    {
        while(currentTitle !== everve.title)
        {
                console.log("no hay internet");
                console.log("refrescando");
                (async () => await driver.navigate().refresh())()
                (async () => await driver.sleep(6000))()
                (async ()=>currentTitle = await driver.getTitle())
                if(currentTitle == everve.title)
                {
                    break;
                }
            }
            console.log("si hay internet")
        } if(e == 'youtube')
    {
        (async () => await driver.findElement((By.xpath(everve.ytLogo))))()
        .catch((err) =>{
            console.log("no hay internet");
            while(youtubeTitle !== everve.ytTitle)
            {
                    console.log("refrescando")
                (async () => {
                    await driver.navigate().refresh()
                    await driver.sleep(6000)
                    tituloYoutube = await driver.getTitle();
                    youtubeTitle = tituloYoutube.substr(tituloYoutube.length - 7);
                })()
                    if(youtubeTitle == everve.ytTitle)
                    {
                        break;
                        // return youtubeTitle;
                    }
            }
        })
        console.log("si hay internet")
    }

}