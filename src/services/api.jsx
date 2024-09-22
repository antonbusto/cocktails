const URL_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

export const obtenerCocktailsPorLetra = async (letra) => {
  const respuesta = await fetch(`${URL_BASE}/search.php?f=${letra}`);
  return await respuesta.json();
};

export const buscarCocktailPorNombre = async (nombre) => {
  const respuesta = await fetch(`${URL_BASE}/search.php?s=${nombre}`);
  return await respuesta.json();
};

export const obtenerCocktailPorId = async (id) => {
  const respuesta = await fetch(`${URL_BASE}/lookup.php?i=${id}`);
  return await respuesta.json();
};
