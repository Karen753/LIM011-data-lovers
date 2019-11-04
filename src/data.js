/* Manejo de data */

export const mostrarListaPokemon = (dataPoke) => {
  const pokedex = dataPoke.map((data) => ({ num: data.num }));
  // eslint-disable-next-line no-console
  return pokedex;
};
/*export const ordenarAlfabeticamente =
 .sort(function (a, b) {
	
  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
});*/
