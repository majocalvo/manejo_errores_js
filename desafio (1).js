// /* Desafío: javaScript

// Nombre de Desafío: control_de_errores_js

// Instrucciones */


// /* Crea una funcion la cual devuelva un error con un mensaje personalizado

// - Registra el error en un archivo a través de un try...catch */
 
// try {
//   console.log('hola')
//   holamundo 
// } catch (err){
//     alert(err.name)
//     alert(err.message)
//     alert(err)
//   }


// No cambies los nombres de las funciones.


function crearGato (nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function(){
      return "Meow!"
    }
  }
  return gato; 

}

console.log( crearGato('Megan', 11).edad  ) 
console.log( crearGato('Megan', 11).edad  ) 
console.log( crearGato('Michi', 13))

var gato1 = crearGato('Megan', 11);
console.log( gato1.meow() )
var gato2 = crearGato('Michi', 13)


function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  // objeto.mi_propiedad = null //agregar propiedad
  objeto[property] = null //otra
  return objeto;
}

var cote = {
  nombre: "Cote"
}

console.log( agregarPropiedad( cote , "apellido") );


function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  // objeto[metodo] = function(){
  //   console.log('hola');
  // }
  objeto.metodo();
}

// var x = {
//   saludo: 'Hola'
// }

// console.log(invocarMetodo(x,"metodo"));



function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  var result = objetoMisterioso*5;
  return result;
  
// return(objetoMisterioso.numeroMisterioso*5);
// }
// var i = {numeroMisterioso:2}

// console.log(multiplicarNumeroDesconocidoPorCinco(i))

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  // delete objeto.unaPropiedad
  delete objeto[unaPropiedad]
 return(objeto);
}

var objeto= {
  nombre : "valor1",
  edad : "valor2",
  email: "mail@mail.com",
  password: "123",
  amigos: ["Matias"]
}

console.log( eliminarPropiedad( objeto, "edad" ) )

function nuevoUsuario (nombre, email, password) {
  var objeto= {
    nombre : nombre,
    email : email,
    password : password,
  }
  return objeto; 
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
}

console.log( nuevoUsuario("a","b","c" ) );

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  usuario["email"]? true : false;
  // return usuario.email ?  true : false

}

// console.log (tieneEmail(objeto))

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  // objeto[propiedad] ? true : false 
  // objeto[propiedad];
  // if (objeto[propiedad]){
  //   return true:
  // } else {
  //   return false;
  // }
  return objeto[propiedad] ? true : false 
}

console.log(tienePropiedad(objeto , "nombre"))


function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  return usuario.password == password ? true : false 
  return usuario["password"] == password;
}

console.log (verificarPassword(objeto,"123"))

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}
console.log(actualizarPassword(objeto, "987"))

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo)

  return usuario
}

var usuario={
  amigos : ['Renata', 'Rafael'],
}

console.log(agregarAmigo(objeto,"Carlos"))
console.log(agregarAmigo(usuario,"Simon"))




function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
    
  }
  return usuarios;
}

var usuario1={
  nombre : "Reni",
  esPremium : null
}
var usuario2={
  nombre : "Rafa",
  esPremium : false
}

console.log(pasarUsuarioAPremium([ usuario1 , usuario2 ]))

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
var suma = 0
for (let i = 0 ;  i< usuario.posts.length; i++) {
 suma += usuario.posts[i].likes;
}
return sum;

}

// var usuario = {
//   posts : [
//      post1 = [
//       likes = 10
//      ],
//     post2 = [
//       likes = 20
//     ]]
// }

  


function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function(){
    var descuento =this.precio * this.porcentajeDeDescuento;
    return this.precio - descuento;
  };

  return producto;
}


