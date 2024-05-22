import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../Context'

//Icons
import { HomeModernIcon, NewspaperIcon, IdentificationIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, MoonIcon, UserIcon } from '@heroicons/react/24/solid'

const Navbar= ()=>{

  const context = useContext(GlobalContext)       //nos traemos el contexto
  const activeStyle = 'text-black/70 underline underline-offset-4'
  
  //Inicio Dark-Mode
  const [theme, setTheme] = useState( ()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark';
    }else{
      return 'light';
    }
  });

  useEffect( ()=>{
    if(theme === 'dark'){
      document.querySelector('html').classList.add('dark');
    }else{
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme] );

   const handleChangeTheme= ()=> {
     setTheme( (prevTheme)=> (prevTheme === 'light'? 'dark' : 'light') );
   };
  //Fin Dark-Mode

  //Inicio Account - Sign In
  //SignOut
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  
  const handleSignOut= ()=>{
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
  }

  //Function SignOut
  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className='text-black/70 dark:text-white/70'>
            {parsedAccount?.email}
          </li>
          <li>
            <NavLink 
              to='/my-account'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              Mi Cuenca
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/admin/users'
              className={({ isActive }) => isActive ? activeStyle : undefined
              }>
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={() => handleSignOut()}>
              Sign out
            </NavLink>
          </li>
        </>
      )
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => handleSignOut()}>
            Sign in
          </NavLink>
        </li>
      )
    }
  }

  //Fin Account - Sign Out

  return (
    <>
      {/* NAV DESKTOP */}
      {/* <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'> */}
      <nav className='hidden justify-between items-center fixed z-10 top-0 w-full h-16 py-5 px-8 text-sm font-medium bg-gray-100   
        text-primary shadow-md border border-slate-200 
        lg:flex
        dark:bg-gray-700 dark:text-white dark:border-slate-600'>
        <ul className='flex items-center gap-3'>
          <li className='font-bold text-lg pr-3'>
            <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`} >
              Alcald&iacute;a Azogues
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              {({ isActive }) => (
                <div className='flex gap-1 items-center'>
                    <HomeModernIcon className= {`size-5 hover:cursor-pointer
                      ${ isActive ? 'text-black/70 underline underline-offset-4' : 
                      'text-primary dark:text-gray-400' } `} /> 
                  Home
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <a href='/#recommendations' 
              className='hover:text-black/70'>Recomentados</a>
          </li>
          <li>
            <a href='/#outstanding_news'
              className='hover:text-black/70'>Resumen Noticias</a>
          </li>
          <li>
            <a href='/#faqs'
              className='hover:text-black/70'>FAQS</a>
          </li>
          <li>
            <a href='/#about_us'
              className='hover:text-black/70'>Sobre Nosotros</a>
          </li>
          <li>
            <NavLink 
              to='/news'
              className={({ isActive }) => isActive ? activeStyle : undefined
              }>
              Noticias
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/connected'
              className={({ isActive }) => isActive ? activeStyle : undefined
              }>
              Conectado
            </NavLink>
          </li>
        </ul>

        <ul className='flex items-center gap-3'>
          
          {/* <li> SignOut </li> */}
          {renderView()}

          <li>
            {/* Icons */}
            <div className='flex space-x-4 justify-center items-center'>
              <UserIcon className='size-5 text-primary hover:cursor-pointer 
                dark:text-white' />
              <button onClick={ handleChangeTheme }>
                <MoonIcon className='size-5 text-primary hover:cursor-pointer 
                dark:text-white' />
              </button>
              <MagnifyingGlassIcon className='size-5 text-gray-400 hover:cursor-pointer 
                dark:text-white' />
            </div>
          </li>

        </ul>
      </nav>

      {/* NAV MOVILE */}
      <div className='w-full h-16 bg-gray-200 fixed left-0 bottom-0 shadow-md rounded-t-3xl flex items-center justify-center
        lg:hidden
        dark:bg-gray-700' 
        id='tab_bar'>
        <ul className='flex space-x-8 items-center justify-center'>
          <li>
            <NavLink to='/'
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              <HomeModernIcon className='size-5 text-primary hover:cursor-pointer
                dark:text-gray-400' /> 

              {/* {({ isActive }) => (
                <HomeModernIcon className= {`size-5 hover:cursor-pointer
                  ${ isActive ? activeStyle : 
                  'text-primary dark:text-gray-400' } `} /> 
              )} */}
             
            </NavLink>
          </li>
          <li>
            <a href='#recommendations'>
              <MagnifyingGlassIcon className='size-6 text-primary hover:cursor-pointer
                dark:text-gray-400' />
            </a>
          </li>
          <li>
            <a href='#outstanding_news'>
              <NewspaperIcon className='size-6 text-primary hover:cursor-pointer
                dark:text-gray-400' />
            </a>
          </li>
          <li>
            <button onClick={ handleChangeTheme }>
              <MoonIcon className='size-6 text-primary hover:cursor-pointer
                dark:text-gray-400' />
            </button>
          </li>
          <li>
            <a href='#faqs'>
              <IdentificationIcon className='size-6 text-primary hover:cursor-pointer
                dark:text-gray-400' />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar