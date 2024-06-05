import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

//Icons
import { HomeModernIcon, NewspaperIcon, IdentificationIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon, MoonIcon, UserIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  //Nos traemos el contexto
  const context = useContext(GlobalContext); 
  const activeStyle = 'text-black/70 underline underline-offset-4';
  //const slide = 'slide';

  //Inicio Dark-Mode
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  //Fin Dark-Mode

  //Inicio Account - Sign In
  //SignOut
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  //Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(true);
  };

  //Functions for navToggle 
  // {
  //   let icon1 = document.getElementById("icon1");
  //   let menu1 = document.getElementById("menu1");

  //   const showMenu1 = (flag) => {
  //     if (flag) {
  //       icon1.classList.toggle("rotate-180");
  //       menu1.classList.toggle("hidden");
  //     }
  //   };

  //   let Main = document.getElementById("Main");
  //   let open = document.getElementById("open");
  //   let close = document.getElementById("close");

  //   const showNav = (flag) => {
  //     if (flag) {
  //       Main.classList.toggle("-translate-x-full");
  //       Main.classList.toggle("translate-x-0");
  //       open.classList.toggle("hidden");
  //       close.classList.toggle("hidden");
  //     }
  //   };

  // }
  

  //Function SignOut
  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className='text-black/70 dark:text-white/70'>{parsedAccount?.email}</li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Mi Cuenca
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/admin'
              className={({ isActive }) => (isActive ? activeStyle : undefined)} 
            >
              {/* <NavLink to='/admin'> */}
              {/* <div id="Main" className=" bg-red-500 xl:rounded-r transform xl:translate-x-0 ease-in-out transition duration-500 flex h-full w-full sm:w-64 flex-col">
                
                <div className=" bg-blue-600 flex flex-col items-center w-full absolute">
                  <button onClick={()=> showMenu1(true)} className="flex items-center w-full" >
                      Admin
                    <svg id='icon1' className='transform' width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M18 15L12 9L6 15' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                  </button>

                  <div id="menu1" className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 ">
                    <button className="flex justify-start items-center space-x-2 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                      <svg className="fill-stroke" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-base leading-4  ">Users</p>
                    </button>
                  </div>
                </div>

              </div> */}
              Admin
            </NavLink>

          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}>
              Sign out
            </NavLink>
          </li>
          <li>
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Login
          </NavLink>
        </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}>
            Sign in
          </NavLink>
        </li>
      );
    }
  };

  //Fin Account - Sign Out

  return (
    <>
      {/* NAV DESKTOP */}
      {/* <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'> */}
      <nav
        className='hidden justify-between items-center fixed z-10 top-0 w-full h-16 py-5 px-8 text-xs font-medium 
        bg-gray-100 text-primary shadow-md border border-slate-200 lg:flex
        dark:bg-gray-700 dark:text-white dark:border-slate-600'>
        <ul className='flex items-center gap-3'>
          <li className='font-bold text-lg pr-3'>
            <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>Alcald&iacute;a Azogues</NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {({ isActive }) => (
                <div className='flex gap-1 items-center'>
                  <HomeModernIcon
                    className={`size-5 hover:cursor-pointer
                      ${
                        isActive
                          ? 'text-black/70 underline underline-offset-4'
                          : 'text-primary dark:text-gray-400'
                      } `}
                  />
                  Home
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <a
              href='/#recommendations'
              className='hover:text-black/70'>
                Recomentados
            </a>
          </li>
          <li>
            <a
              href='/#outstanding_news'
              className='hover:text-black/70'>
                Resumen Noticias
            </a>
          </li>
          <li>
            <a
              href='/#faqs'
              className='hover:text-black/70'>
                FAQS
            </a>
          </li>
          <li>
            <a
              href='/#about_us'
              className='hover:text-black/70'>
                Sobre Nosotros
            </a>
          </li>
          <li>
            <NavLink
              to='/news'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Noticias
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/connected`}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Conectado
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/register-user'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/customers'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Customers
            </NavLink>
          </li>
        </ul>

        <ul className='flex items-center gap-3'>
          {/* <li> SignOut </li> */}
          {renderView()}

          <li>
            {/* Icons */}
            <div className='flex space-x-4 justify-center items-center'>
              <UserIcon
                className='size-5 text-primary hover:cursor-pointer 
                dark:text-white'
              />
              <button onClick={handleChangeTheme}>
                <MoonIcon
                  className='size-5 text-primary hover:cursor-pointer 
                dark:text-white'
                />
              </button>
              <MagnifyingGlassIcon
                className='size-5 text-gray-400 hover:cursor-pointer 
                dark:text-white'
              />
            </div>
          </li>
        </ul>
      </nav>

      {/* NAV MOVILE */}
      <div
        className='w-full h-16 bg-gray-200 fixed left-0 bottom-0 shadow-md rounded-t-3xl flex items-center justify-center
        lg:hidden
        dark:bg-gray-700'
        id='tab_bar'>
        <ul className='flex space-x-8 items-center justify-center'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <HomeModernIcon
                className='size-5 text-primary hover:cursor-pointer
                dark:text-gray-400'
              />

              {/* {({ isActive }) => (
                <HomeModernIcon className= {`size-5 hover:cursor-pointer
                  ${ isActive ? activeStyle : 
                  'text-primary dark:text-gray-400' } `} /> 
              )} */}
            </NavLink>
          </li>
          <li>
            <a href='#recommendations'>
              <MagnifyingGlassIcon
                className='size-6 text-primary hover:cursor-pointer
                dark:text-gray-400'
              />
            </a>
          </li>
          <li>
            <a href='#outstanding_news'>
              <NewspaperIcon
                className='size-6 text-primary hover:cursor-pointer
                dark:text-gray-400'
              />
            </a>
          </li>
          <li>
            <button onClick={handleChangeTheme}>
              <MoonIcon
                className='size-6 text-primary hover:cursor-pointer
                dark:text-gray-400'
              />
            </button>
          </li>
          <li>
            <a href='#faqs'>
              <IdentificationIcon
                className='size-6 text-primary hover:cursor-pointer
                dark:text-gray-400'
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
