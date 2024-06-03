import { createContext, useState } from 'react';
import { useFetch } from '../../api/useFetch';
//import { fetchData } from '../../api/fetchData';

import PropTypes from 'prop-types';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  //My account
  const [account, setAccount] = useState({});

  //My sign-out
  const [signOut, setSignOut] = useState(false);

  //items, setItems
  const { items } = useFetch('https://fakestoreapi.com/products');
  //const apiItems = fetchData('https://fakestoreapi.com/products');

  // customers, setCustomers
  const { error, isLoading, customers } = useFetch('http://localhost:3000/api/v1/customers');
  //const apiCustomers = fetchData('http://localhost:3000/api/v1/customers');



  //Función para persistir los datos en localStorage
  // const saveCustomers = (newItem) =>{
  //   localStorage.setItemCustomer(itemName, JSON.stringify(newItem));
  //   setItemCustomer(newItem);
  // }

  //Función con la lógica para Agregar un nuevo usuarios
  // const addCustomer = (text) => {
  //   const newCustomers = [...customers];
  //   newCustomers.push({
  //     text,
  //     completed: false,
  //   });
  //   saveCustomers(newCustomers);
  // }

  //Función con la lógica para Actualizar usuarios existentes
  // const updateCustomer = (text) => {
  //   const newCustomers = [...customers];
  //   const index = newCustomers.findIndex(
  //     (task) => task.text === text
  //   );
  //   newCustomers[index].completed = true;
  //   saveCustomers(newCustomers);
  // }

  //Función con la lógica para eliminar usuarios existentes
  // const deleteCustomer = (text) => {
  //   const newCustomers = [...customers];
  //   const index = newCustomers.findIndex(
  //     (task) => task.text === text
  //   );
  //   newCustomers.splice(index, 1);
  //   saveCustomers(newCustomers);
  // }

  return (
    <GlobalContext.Provider
      value={{
        account,
        setAccount,
        signOut,
        setSignOut,

        items,
        customers,
        error,
        isLoading,

        //apiCustomers,
        //apiItems,

        //test
        //addCustomer,
        //updateCustomer,
        //deleteCustomer

      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
