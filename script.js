
var tipoGasto = document.getElementById('tipoGasto');
var monto = document.getElementById('monto');
var gastos = [];

function agregarGasto(){
    gastos.push(tipoGasto.value + ":" + "$" + monto.ariaValueText);
}

function limpiarCampos(){
    tipoGasto.value = "";
    monto.value = "";
    console.log(gastos);    
}