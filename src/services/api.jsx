const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

// Obtener lista de cócteles por letra
export const obtenerCocktailsPorLetra = async (letra) => {
  const res = await fetch(`${API_BASE_URL}/search.php?f=${letra}`);
  return await res.json();
};

// Buscar cóctel por nombre
export const buscarCocktailPorNombre = async (nombre) => {
  const res = await fetch(`${API_BASE_URL}/search.php?s=${nombre}`);
  return await res.json();
};

// Obtener detalles de un cóctel por ID
export const obtenerDetallesCocktail = async (id) => {
  const res = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
  return await res.json();
};

// Listar ingredientes por nombre
export const buscarIngredientePorNombre = async (nombre) => {
  const res = await fetch(`${API_BASE_URL}/search.php?i=${nombre}`);
  return await res.json();
};

// Obtener detalles de un ingrediente por ID
export const obtenerDetallesIngrediente = async (id) => {
  const res = await fetch(`${API_BASE_URL}/lookup.php?iid=${id}`);
  return await res.json();
};

// Listar categorías de ingredientes
export const listarCategoriasIngredientes = async () => {
  const res = await fetch(`${API_BASE_URL}/list.php?i=list`);
  return await res.json();
};

// Filtrar cócteles por ingrediente
export const buscarCocktailsPorIngrediente = async (ingrediente) => {
  const res = await fetch(`${API_BASE_URL}/filter.php?i=${ingrediente}`);
  return await res.json();
};
