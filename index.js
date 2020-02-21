/**
 Cosas que faltan:
    -comprobar si youtube se tranco en suscriciones
    -crear una funcion para cambiar de tarea si no hay mas tareas
    -comprobar si hay internet
 */

sub = require('./src/youtube/subscribe.js');
watch = require('./src/youtube/view.js');

  sub.subscribe(1000, 'Usuario')
  .catch((e)=> console.log('hubo un error'))
  .then(()=>{
    watch.view(1000, 'Usuario')
  })