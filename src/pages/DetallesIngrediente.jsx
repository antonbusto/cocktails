import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { obtenerDetallesIngrediente } from '../services/api';

const DetallesIngrediente = () => {
  const { id } = useParams();
  const [ingrediente, setIngrediente] = useState(null);

  useEffect(() => {
    const cargarDetalles = async () => {
      const data = await obtenerDetallesIngrediente(id);
      if (data.ingredients && data.ingredients.length > 0) {
        setIngrediente(data.ingredients[0]);
      }
    };

    cargarDetalles();
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles del Ingrediente</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {ingrediente && (
          <IonCard>
            <img src={`https://www.thecocktaildb.com/images/ingredients/${ingrediente.strIngredient}-Medium.png`} alt={ingrediente.strIngredient} />
            <IonCardHeader>
              <IonCardTitle>{ingrediente.strIngredient}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{ingrediente.strDescription || 'No hay descripción disponible.'}</p>
              <p>Tipo: {ingrediente.strType || 'Desconocido'}</p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default DetallesIngrediente;
