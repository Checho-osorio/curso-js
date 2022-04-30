import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from "./js/await";
import "./styles.css";

console.time("await");

/* obtenerHeroesArr().then((heroes) => {
  console.table(heroes);
  console.timeEnd("await");
}); */

/* obtenerHeroeAwait( 'capi1' ).then((heroe) => {
  console.log(heroe);  
  console.timeEnd("await");
}); */

heroesCiclo();

heroeIfAwait('iron')
