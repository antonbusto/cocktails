import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

const ListaIngredientes = ({ ingredientes }) => {
  return (
    <div className="lista-ingredientes">
      {ingredientes.map((ingrediente) => (
        <IonCard key={ingrediente.idIngredient}>
          <img src={`https://www.thecocktaildb.com/images/ingredients/${ingrediente.strIngredient}-Small.png`} alt={ingrediente.strIngredient} />
          <IonCardHeader>
            <IonCardTitle>{ingrediente.strIngredient}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      ))}
    </div>
  );
};

export default ListaIngredientes;
