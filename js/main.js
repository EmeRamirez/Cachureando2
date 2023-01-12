var fecha = document.getElementById('fecha');
setInterval(function () {
    var data = new Date();
    fecha.innerHTML = data.toLocaleTimeString();
},1000);

