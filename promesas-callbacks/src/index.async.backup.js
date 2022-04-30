import { buscarHeroe, buscarHeroeAsync } from './js/promesas';
import './styles.css';

//import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'



/* 
promesaLenta.then( console.log )
promesaMedia.then( console.log )
promesaRapida.then( console.log ) */
/* 
Promise.race([ promesaLenta, promesaMedia, promesaRapida])
        .then( console.log );

         */

buscarHeroe( 'capi1' )
    .then( heroe => console.log(heroe) )
    .catch( console.warn );

buscarHeroeAsync ( 'iron' ).then( heroe => console.log(heroe) );

