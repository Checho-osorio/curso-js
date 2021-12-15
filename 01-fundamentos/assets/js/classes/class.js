
class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias ';
    }

    static mensaje (){
        console.log(this.nombre);
        console.log('Este es un mensaje de un metodo statico');
    }

    nombre = ''; 
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre, codigo, frase ){
        
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();

    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${ this.comida }`;
    }

    quienSoy() {
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);

    }

    miFrase (){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}


const spiderman = new Persona('Peter parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
// const ironman = new Persona('Tony Stark', 'ironman', 'Yo soy IronMan');


// console.log(ironman);

//ironman.miFrase();

spiderman.setComidaFavorita = 'el pie de cereza de  la tía May';

// spiderman.comida = 'Duende Verde';


// console.log( spiderman.getComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2 ;


console.log('Conteo Stático', Persona._conteo );
console.log(Persona.conteo);
Persona.mensaje();

// 

Persona.propiredadExterna = 'Hola Mundo';

console.log(Persona);
console.log(Persona.propiredadExterna);