const remote = require('electron').remote,
    $ = require('jquery'),
    username = process.env.username || process.env.user,
    aplicacion = require('../../src/youtube/view.js');
    var app = angular.module('myApp', []);
    document.getElementById('reiniciar').addEventListener('click', reiniciar)
    var info = document.getElementById('info');

app.controller('miCtrl', ($scope)=>{
    function mensaje(e)
    {
        info.innerHTML = e;
    //     var node = document.createElement("LI");
    // var textnode = document.createTextNode(e);
    // node.appendChild(textnode);
    // document.getElementById("myList").appendChild(node);
}

    document.getElementById('watchVideos').addEventListener('click', function(){

        $().ready(function(){
            $("#list").hide(500)
            $("#reboot").show(500)
        });
        aplicacion.view(1000, username, mensaje)
    });
});
function reiniciar()
{
    aplicacion.cerrar()
    const window = remote.getCurrentWindow()
    window.reload();
    alert("cierre el navegador")
}