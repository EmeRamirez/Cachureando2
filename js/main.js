
var fecha = document.getElementById('fecha');
setInterval(function() {
    var data = new Date();
    fecha.innerHTML = data.getDate()+ "/" + "/" +data.getMonth()+1 + "/"+data.getFullYear()+"/ hora: "+data.toLocaleTimeString();
},1000);
