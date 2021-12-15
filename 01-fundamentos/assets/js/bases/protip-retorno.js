/* function crearPersona ( nombre, apellido ){
    return{
        nombre,
        apellido
    }
} */

const crearPersona = ( nombre, apellido ) =>  ({nombre, apellido})


const persona = crearPersona ( 'Sergio', 'Osorio');
console.log( persona );

