const dia = 6;
const horaActual = 10;

let horaApertura;
let mensaje;

/* if ( dia === 0 || dia === 6 ) */

/* if([0,6].includes( dia )){
console.log('Fin de semana');
horaApertura = 9
}else{
    console.log('Día de semana');
    horaApertura = 11
} */


horaApertura = ([0,6].includes( dia )) ? 9 : 11;

/* if ( horaActual >= horaApertura){
    mensaje = 'Está abierto'
}else {
    mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
}
 */


mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura}`;

console.log({horaApertura, mensaje});


