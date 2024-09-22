import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonButton } from '@ionic/react';
import { obtenerCocktailPorId } from '../services/api';

const DetallesCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const cargarCocktail = async () => {
      const data = await obtenerCocktailPorId(id);
      setCocktail(data.drinks[0]);
    };
    cargarCocktail();
  }, [id]);

  if (!cocktail) return <div>Cargando...</div>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles del Cóctel</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonImg src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <IonCardHeader>
            <IonCardTitle>{cocktail.strDrink}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>
            <p><strong>Categoría:</strong> {cocktail.strCategory}</p>
            <p><strong>Alcohol:</strong> {cocktail.strAlcoholic}</p>
          </IonCardContent>
        </IonCard>
        <IonButton routerLink="/" expand="block" color="primary">
          Volver a la Página Principal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DetallesCocktail;
