function Reloj() {
    var hora_actual = new Date();
    var hora = hora_actual.getHours().toString();
    if (hora.length == 1) { hora = "0" + hora; };
    var minuto = hora_actual.getMinutes();
    var segundo = hora_actual.getSeconds();

    minuto = checkTime(minuto);
    segundo = checkTime(segundo);
    document.getElementById("reloj1").innerHTML = hora + " : " + minuto + " : " + segundo;
    var time = setTimeout(function () { Reloj() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}