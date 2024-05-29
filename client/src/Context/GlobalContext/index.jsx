import { createContext, useState, useEffect } from 'react';
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
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setItems(data)),
      //fetch('https://fakestoreapi.com/users')
      //fetch('https://api.escuelajs.co/api/v1/users')
      //fetch('http://localhost:3000/api/v1/users')
      //.then(response => response.json())
      //.then(data => setUsers(data))

      //fetch('https://api.escuelajs.co/api/v1/users')
      fetch('http://localhost:3000/api/v1/customers')
        .then((response) => response.json())
        .then((data) => setCustomers(data));
  }, []);

  //users, setUsers
  const [users, setUsers] = useState(null);

  //customers, setCustomers
  const [customers, setCustomers] = useState(null);

  //navbar
  //const [childrenNavbar, setChildrenNavbar] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        account,
        setAccount,
        signOut,
        setSignOut,

        items,
        setItems,
        users,
        setUsers,
        customers,
        setCustomers,

        //childrenNavbar,
        //setChildrenNavbar
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
