import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { GlobalProvider, GlobalContext } from '../../Context/GlobalContext';
import { initializeLocalStorage } from '../../Context/initializeLocalStorage';

//Pages
import Home from '../Home';
import News from '../News';
import Connected from '../Connected';
import Admin from '../Admin';
import Users from '../Users';
import MyAccount from '../MyAccount';
import SignIn from '../SignIn';
import NotFound from '../NotFound';

//Components
import Navbar from '../../Components/Navbar';

//css
import './App.css';

const AppRoutes = () => {
  const context = useContext(GlobalContext);

  //Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  //SingOut
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = Object.keys(context.account).length === 0;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || parsedSignOut;

  let routes = useRoutes([
    // { path: '/', element: <Home /> },
    {
      path: '/',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate
            replace
            to={'/sign-in'}
          />
        ),
    },
    { path: '/news', element: <News /> },
    { path: '/connected', element: <Connected /> },
    { 
      path: '/admin', element: <Admin />,
      children: [
        { path: 'users', element: <Users /> },
      ],
    },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  initializeLocalStorage();
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
