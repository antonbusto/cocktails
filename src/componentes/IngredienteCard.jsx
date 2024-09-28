import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const IngredienteCard = ({ ingrediente }) => {
  const imagenUrl = `https://www.thecocktaildb.com/images/ingredients/${ingrediente.strIngredient}-Small.png`;

  return (
    <IonCard>
      <img src={imagenUrl} alt={ingrediente.strIngredient} />
      <IonCardHeader>
        <IonCardTitle>{ingrediente.strIngredient}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{ingrediente.strDescription || 'No hay descripción disponible.'}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default IngredienteCard;
