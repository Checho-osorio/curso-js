let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat:34.034,
        lng: -118.70
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '1080, 90265',
        unicacion: 'Malibu, California'
    }
};

console.log( personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje['edad']);

console.log('coors:', personaje.coords.lat);

console.log('Numero de trajes', personaje.trajes.length); 
console.log('ultimo traje', personaje.trajes[personaje.trajes.length -1]); 


const x = 'vivo';

console.log('Vivo', personaje[x]);


// más detalles

delete personaje.edad;


console.log (personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log (entriesPares);

Object.freeze( personaje);

personaje.dinero = 1000000000;

console.log (personaje);



const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({propiedades,valores});
