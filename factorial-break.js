var dato = 10;
var resultado = dato;
var i = dato-1;
while (i>1){
    resultado = resultado*i;
    i--;
    if (resultado < 1){
    break;
    }
}
console.log('El factorial de 10 es:', resultado)