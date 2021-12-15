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

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase' ){
        
        
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

class Heroe  extends Persona {
    clan = 'Sin Clan';



    constructor( nombre, codigo, frase ){
        super(nombre, codigo, frase);

        this.clan = ' Los Avengers'

    }

}


const spiderman = new Heroe('Peter parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
// const spiderman = new Heroe();
console.log(spiderman);

