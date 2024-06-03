

import { useState, useEffect } from 'react';
  
//custom hook useFetch
function useFetch(url) {

  //error, setError -> estado para validar si existe un error al cargar información.
  const [error, setError] = useState(null);

  //loading, setLoading -> estado para validar si sigue cargando información.
  const [isLoading, setIsLoading] = useState(false);

  //controller, setController -> estado para abortar la carga de informacion de un componente y ahorrar recursos .
  const [controller, setController] = useState(null);

  //items, setItems -> fotos de cards
  const [items, setItems] = useState(null);

  //customers, setCustomers -> Customers
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);

    setTimeout(() => {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => setItems(data)),

      fetch(url, {signal: abortController.signal})
        .then((response) => response.json())
        .then((data) => setCustomers(data))
        //.then((data) => setError('Ocurrio un error'))
        .catch((error) => {
          if(error.name === 'AbortError'){
            console.log('Respuesta cancelada');
          }else{
            setError(error)
          }
        })
        .finally(() => setIsLoading(false))
      return () => abortController.abort();

    }, 1000);
  }, []);

  // const newEvent = () => {
  //   fetch(url, {
  //     method:'POST',
  //     body:JSON.stringify(customers)
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setCustomers(data));
  // }

  const handleCancelRequest = () =>{
    if (controller)
      controller.abort();
      setError("Respuesta cancelada");
  }

  return { error, isLoading, handleCancelRequest, items, customers }

}

export { useFetch }

//fetch('https://fakestoreapi.com/users')
//fetch('https://api.escuelajs.co/api/v1/users')