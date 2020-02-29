const remote = require('electron').remote;
const $ = require('jquery');
const username = process.env.username || process.env.user;
const app = require('../../src/youtube/view.js');

// const main = remote.require('./index.js')

const btn1 = document.getElementById('btn-close');
btn1.addEventListener('click', ()=>{
    const window = remote.getCurrentWindow();
    window.close();
});

const btn2 = document.getElementById('btn-mini');
btn2.addEventListener('click', ()=>{
    const window = remote.getCurrentWindow();
    window.minimize();
});

$().ready(function(){
    $("#watchVideos").click(function(){
        $("#list").hide(500)
        $("#reboot").show(500)
        app.view(1000, username)
    })
    $('#reiniciar').click(function(){
        const window = remote.getCurrentWindow();
        window.reload();
    })
})