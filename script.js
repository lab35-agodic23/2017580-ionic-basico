
var usuario = document.getElementById('usuario');
var password = document.getElementById('password');

var p = document.createElement("p");
p.setAttribute("id","p1");

function login(){
    document.getElementById('p1').value = "";
    var pTexto = document.createTextNode("El usuario " + usuario.value + " inicio sesion con exito...");
    p.appendChild(pTexto);
    document.body.appendChild(p);
    limpiarCampos();
}


function signup(){
    document.getElementById('p1').value = "";
    var pTexto = document.createTextNode("El usuario " + usuario.value + " se registro con exito...");
    p.appendChild(pTexto);
    document.body.appendChild(p);
    limpiarCampos();
}

function limpiarCampos(){
    usuario.value = "";
    password.value = "";
       
}