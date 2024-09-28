import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import { obtenerDetallesCocktail } from '../services/api';

const DetallesCocktail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const cargarDetalles = async () => {
      const data = await obtenerDetallesCocktail(id);
      if (data.drinks && data.drinks.length > 0) {
        setCocktail(data.drinks[0]);
      }
    };

    cargarDetalles();
  }, [id]);

  const mostrarIngredientes = () => {
    const ingredientes = [];
    for (let i = 1; i <= 15; i++) {
      const ingrediente = cocktail[`strIngredient${i}`];
      const medida = cocktail[`strMeasure${i}`];
      if (ingrediente) {
        ingredientes.push(
          <li key={i} className="ingrediente-item">
            {ingrediente} {medida ? `- ${medida}` : ''}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles del Cóctel</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {cocktail && (
          <div className="detalles-cocktail-contenedor">
            <IonCard className="detalles-cocktail-card">
              <img src={`${cocktail.strDrinkThumb}`} alt={cocktail.strDrink} className="cocktail-imagen" />
              <IonCardHeader>
                <IonCardTitle>{cocktail.strDrink}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <h2>Ingredientes</h2>
                <ul className="lista-ingredientes">
                  {mostrarIngredientes()}
                </ul>
                <h2>Instrucciones</h2>
                <p>{cocktail.strInstructions}</p>
              </IonCardContent>
            </IonCard>

            {/* Botón para volver a la página principal */}
            <IonButton className="volver-boton" onClick={() => history.push('/')}>
              Volver
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default DetallesCocktail;
