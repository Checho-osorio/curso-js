const regresaTrue = ()=> {
    console.log('Regresa true');
    return true
}

const regresaFalse = ()=> {
    console.log('Regresa false');
    return false
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');

console.log(true && true);
console.log(true && !false);

console.log('===================');

console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse() );


console.warn('OR');
console.log(true || false );
console.log(false || false );

console.log(regresaTrue() || regresaFalse() );


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyfalso = false;

const a1 = true && 'Hola Mundo' && 150; 
const a2 = 'hola' && 'Mundo' && soyfalso && true; 
const a3 = soyfalso || 'Ya no soy falso'; 

console.log({a1,a2,a3, });
