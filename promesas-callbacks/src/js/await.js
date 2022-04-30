import { buscarHeroeAsync , buscarHeroe} from "./promesas";


const heoresIds = [ 'capi', 'iron', 'spider'];
const heroesPromesas = heoresIds.map( buscarHeroe );


 export const obtenerHeroesArr = async() => {

     //************************ forma elegante await for */

     return await Promise.all( heoresIds.map( buscarHeroe ) );

    // const heroesArr = [];

    // for( const id of heoresIds){
        
    //    const heroe = await buscarHeroe( id );

    // }

   // return heroesArr;

    //************* await dentro d eun for */

    // const heroesArr = [];

    // for( const id of heoresIds){
    //     heroesArr.push(  buscarHeroe( id ) );

    // }
    
    // return  await Promise.all( heroesArr );


   

    
}


 export const obtenerHeroeAwait = async ( id ) => {

    try {
        const heroe = await buscarHeroeAsync ( id );

        return heroe;
        
    } catch (err) {
        
        console.log('CATCH!!!');
        console.log(err);
    }

   
 }


 export const heroesCiclo = async () => {

    console.time('HeroesCiclo');

    
        for await ( const heroe of heroesPromesas){
            console.log(heroe);
        }


/*     console.log(heroes) */; 
    
    
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe));
    console.timeEnd('HeroesCiclo');
 }

 export const heroeIfAwait = async ( id ) =>{

    if ((await buscarHeroeAsync( id )).nombre === 'Ironman'){
        console.log('Es el mejor de todos!!!!');
    }else {
        console.log('naaa!!!');
    }
 }