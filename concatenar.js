function yes() {
var button = document.getElementById('send');
var monto = document.getElementById('monto');
var fecha = document.getElementById('fecha');
var subsidio = document.getElementById('subsidio');
    var str = 'El monto es de ' + monto.value + 
        ', del mes de ' + fecha.value +
        ' correspondiente al subsidio  ' + subsidio.value;
    document.getElementById('send').innerHTML=str;
};