const dato = 10; // Número del que queremos calcular el factorial
let f = 1;
for(let i = dato; i>0; i--){
    f *= i;
}
console.log('El factorial es: ',f)