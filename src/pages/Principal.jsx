import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonButtons } from '@ionic/react';
import ListaCocktails from '../componentes/ListaCocktails';
import Cabecera from '../componentes/Cabecera';
import { obtenerCocktailsPorLetra, buscarCocktailPorNombre } from '../services/api';

const Principal = () => {
  const [cocktails, setCocktails] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(26); // Total de letras del abecedario (26 páginas en total)
  const [rangoPaginas, setRangoPaginas] = useState([1, 5]); // Mostrar 5 páginas a la vez

  useEffect(() => {
    cargarCocktails();
  }, [pagina]);

  const cargarCocktails = async () => {
    const data = await obtenerCocktailsPorLetra(String.fromCharCode(96 + pagina)); // 'a' = 97 en ASCII
    setCocktails(data.drinks || []);
  };

  const manejarBusqueda = async (termino) => {
    if (!termino) {
      cargarCocktails();
      return;
    }
    const data = await buscarCocktailPorNombre(termino);
    setCocktails(data.drinks || []);
  };

  // Manejar el cambio de página
  const cambiarPagina = (numPagina) => {
    if (numPagina < 1 || numPagina > totalPaginas) return;
    setPagina(numPagina);

    // Ajustar el rango de páginas visibles si es necesario
    if (numPagina > rangoPaginas[1]) {
      setRangoPaginas([rangoPaginas[0] + 1, rangoPaginas[1] + 1]);
    } else if (numPagina < rangoPaginas[0]) {
      setRangoPaginas([rangoPaginas[0] - 1, rangoPaginas[1] - 1]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cócteles</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <Cabecera onBuscar={manejarBusqueda} />
        <ListaCocktails cocktails={cocktails} />
      </IonContent>

      <IonFooter>
        <IonButtons>
          {/* Botón para ir a la primera página */}
          <IonButton onClick={() => cambiarPagina(1)} disabled={pagina === 1}>
            Primera
          </IonButton>

          {/* Botón para ir a la página anterior */}
          <IonButton onClick={() => cambiarPagina(pagina - 1)} disabled={pagina === 1}>
            Anterior
          </IonButton>

          {/* Botones numerados de la paginación */}
          {Array.from({ length: rangoPaginas[1] - rangoPaginas[0] + 1 }, (_, i) => i + rangoPaginas[0]).map((num) => (
            <IonButton
              key={num}
              onClick={() => cambiarPagina(num)}
              className={`paginacion ${num === pagina ? 'active' : ''}`}
              disabled={num === pagina}
            >
              {num}
            </IonButton>
          ))}

          {/* Botón para ir a la página siguiente */}
          <IonButton onClick={() => cambiarPagina(pagina + 1)} disabled={pagina === totalPaginas}>
            Siguiente
          </IonButton>

          {/* Botón para ir a la última página */}
          <IonButton onClick={() => cambiarPagina(totalPaginas)} disabled={pagina === totalPaginas}>
            Última
          </IonButton>
        </IonButtons>
      </IonFooter>
    </IonPage>
  );
};

export default Principal;
