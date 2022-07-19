import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  // ¡Podemos utilizar otros hooks!
  const [item, setItem] = React.useState(initialValue);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Guardamos nuestro item en una constante
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  }, []);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem); // no mandar el stringifyItem pues este es solo para el local storage
    } catch (error) {
      setError(error);
    }
  };

  // Regresamos los datos que necesitamos
  return { item, saveItem, loading, error };
}

export { useLocalStorage };
