//El template strings o template literals nos pemite crear una plantilla.
//Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. 
//Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de
// interpolación de cadenas de caracteres.



const nombre = 'Carlos'; // comillas simples
const apellido = "Leiton"; // comillas dobles

// const saludo = "Bienvenido, Don " + nombre + ", Gracias por venir";
// console.log(saludo);

//--------------------------------------------------------

//El template strings o template literals nos pemite crear una plantilla.
//
const saludo2 = `Hola, Bienvenido Don ${nombre}, gracias por visitarnos`
console.log(saludo2);
