

let a = 9;



if ( a >= 10) {
    console.log('A es mayor o igual a 10');
}else
{
console.log('A es menor a 10');
}


//console.log('Fin de programa');


const hoy = new Date();

let dia = hoy.getDay();

console.log( {dia} );


if ( dia === 0){
    console.log('Domingo');
} else{
    /* if ( dia === 1){
        console.log('Lunes');
    } else{
        console.log('No es lunes ni Domingo');
    } */
}



// sin usar If Else o Switch, unicamente Objetos
dia = 3; // 0:domingo, 1: lunes
// dia de la semana desde el domingo


let diasSemana = [ 'Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log(diasSemana[dia]);


