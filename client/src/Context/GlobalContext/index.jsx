import { createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '../../api/useFetch';
import { registerRequestUser, loginRequestUser } from '../../api/users';

import PropTypes from 'prop-types';

const GlobalContext = createContext();

//My custom hook
const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within an GlobalProvider');
  }
  return context;
};

const GlobalProvider = ({ children }) => {
  GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  //User
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState({});

  //Registrar
  const signup = async (user) => {
    try {
      const res = await registerRequestUser(user);
      //console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      //console.log(error.response.data.errors[0].message);
      //console.log(error.response.data.message);
      // if (Array.isArray(error.response.data)) {
      //   setErrors(error.response.data);
      // }
      setErrors(error.response.data);
    }
  };

  //Login
  const signin = async (user) => {
    try {
      const res = await loginRequestUser(user);
      console.log(res);
    } catch (error) {
      //console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      }
      setErrors(error.response.data);
    }
  };

  //Eliminar alert errors despues de 5s
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  //My account
  const [account, setAccount] = useState({});

  //My sign-out
  const [signOut, setSignOut] = useState(false);

  //items, setItems
  const { items } = useFetch('https://fakestoreapi.com/products');
  //const apiItems = fetchData('https://fakestoreapi.com/products');

  // customers, setCustomers
  const { isError, isLoading, customers } = useFetch('http://localhost:3000/api/v1/customers');

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
        user,
        setUser,
        signup,
        signin,
        isAuthenticated,
        errors,

        account,
        setAccount,
        signOut,
        setSignOut,

        items,
        customers,
        isError,
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

export { GlobalContext, GlobalProvider, useGlobal };
