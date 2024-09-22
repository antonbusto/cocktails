import React from 'react';
import { Link } from 'react-router-dom';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';

const ListaCocktails = ({ cocktails }) => {
  return (
    <div className="lista-cocktails">
      {cocktails.map((cocktail) => (
        <IonCard key={cocktail.idDrink}>
          <IonImg src={`${cocktail.strDrinkThumb}/preview`} alt={cocktail.strDrink} />
          <IonCardHeader>
            <IonCardTitle>{cocktail.strDrink}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Link to={`/cocktail/${cocktail.idDrink}`}>
              <IonButton expand="block" color="primary">+ Info</IonButton>
            </Link>
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
};

export default ListaCocktails;
