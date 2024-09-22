import React, { useState } from 'react';
import { IonToolbar, IonSearchbar, IonButtons, IonButton } from '@ionic/react';

const Cabecera = ({ onBuscar }) => {
  const [termino, setTermino] = useState('');

  // Manejar el cambio en el input de la búsqueda
  const manejarCambio = (e) => {
    const nuevoTermino = e.detail.value;
    setTermino(nuevoTermino);
    // Llamar a la función de búsqueda en tiempo real
    onBuscar(nuevoTermino);
  };

  return (
    <IonToolbar>
      <IonSearchbar
        value={termino}
        onIonInput={manejarCambio}
        placeholder="Buscar cóctel"
        debounce={300} // Añadir un pequeño retraso para evitar demasiadas solicitudes
      />
    </IonToolbar>
  );
};

export default Cabecera;
