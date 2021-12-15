const sergio = {
    nombre: 'Sergio',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre}  -  Edad: ${this.edad}`);
    }
}


const fher = {
    nombre: 'Fher',
    edad: 35,
    imprimir(){
        console.log(`Nombre: ${this.nombre}  -  Edad: ${this.edad}`);
    }
}


function Persona( nombre , edad ) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre}  -  Edad: ${this.edad}`);
    }

}

const maria = new Persona('Maria', 18);
const mellisa = new Persona('Mellisa', 18);

maria.imprimir();
mellisa.imprimir();