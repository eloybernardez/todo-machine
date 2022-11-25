import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );

  const { sincronizedItem, error, loading, item } = state;

  //Action Creators
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });

  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });

  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  ///////////////////////////////////////////////////////////

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

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [sincronizedItem]);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      // no mandar el stringifyItem pues este es solo para el local storage
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  // Regresamos los datos que necesitamos
  return { item, saveItem, loading, error, sincronizeItem };
}

///////////////////// REDUCER LOGIC///////////////////////////////////////////////
const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  sincronize: "SINCRONIZE",
  save: "SAVE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.success]: {
    ...state,
    loading: false,
    error: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: { ...state, item: payload },
  [actionTypes.error]: { ...state, error: true },
  [actionTypes.sincronize]: { ...state, sincronizedItem: false, loading: true },
});

const reducer = (state, action) =>
  reducerObject(state, action.payload)[action.type] || state;

//////////////////////////////////////////////////////////////////////////////////
export { useLocalStorage };
