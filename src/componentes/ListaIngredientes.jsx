import React from 'react';
import IngredienteCard from './IngredienteCard';

const ListaIngredientes = ({ ingredientes }) => {
  return (
    <div className="lista-ingredientes">
      {ingredientes.map((ingrediente) => (
        <IngredienteCard key={ingrediente.idIngredient} ingrediente={ingrediente} />
      ))}
    </div>
  );
};

export default ListaIngredientes;
