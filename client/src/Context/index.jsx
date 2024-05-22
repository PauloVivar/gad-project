import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types'

export const GlobalContext = createContext()

//account and sign-out

export const initializeLocalStorage= ()=>{

  // initializeLocalStorage.propTypes = {
  //   children: PropTypes.node.isRequired,
  // }

  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if(!accountInLocalStorage){
    localStorage.getItem('account', JSON.stringify({}))
    parsedAccount = {}
  }else{
    // eslint-disable-next-line no-unused-vars
    parsedAccount = JSON.parse(accountInLocalStorage)
  }
  
  if(!signOutInLocalStorage){
    localStorage.getItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  }else{
    // eslint-disable-next-line no-unused-vars
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}


export const GlobalProvider = ({ children }) =>{
  GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  //My account
  const [account, setAccount] = useState({})

  //My sign-out
  const [signOut, setSignOut] = useState(false)

  //items, setItems
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data)),

    //fetch('https://fakestoreapi.com/users')
    //fetch('https://api.escuelajs.co/api/v1/users')
    //fetch('http://localhost:3000/api/v1/users')
      //.then(response => response.json())
      //.then(data => setUsers(data))
    
    //fetch('https://api.escuelajs.co/api/v1/users')
    fetch('http://localhost:3000/api/v1/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
  }, [])

  //users, setUsers
  const [users, setUsers] = useState(null)

  //customers, setCustomers
  const [customers, setCustomers] = useState(null)

  return(
    <GlobalContext.Provider value={{
      account,
      setAccount,
      signOut,
      setSignOut,
      
      items,
      setItems,
      users,
      setUsers,
      customers,
      setCustomers
    }}>
      { children }
    </GlobalContext.Provider>
  )
}