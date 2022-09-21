//Parámetros predeterminados de función permiten que los parámetros con nombre se inicien con valores 
//predeterminados si no se pasa ningún valor o undefined.
//Los Parametros o valores por defecto nos permite darle un valor o parametro a una funcion

function suma (a, b){
  return a + b;
}

console.log(suma(7));


//---------------------------------------------------------

function suma2 (a, b=5){
  return a + b;
}

console.log(suma2(5))
