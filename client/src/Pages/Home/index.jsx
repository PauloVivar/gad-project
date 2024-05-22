//React -> useState . caja donde vamos a almacenar info de API
//React -> useEffect . para consumir la API
import { useContext } from 'react'
import { GlobalContext } from '../../Context'

//Components
import Layout from '../../Components/Layout'
import CardInfo from '../../Components/CardInfo'
import CardNews from '../../Components/CardNews'
//import Card from '../../Components/Card'

import '../App/App.css'

function Home() {
  const context = useContext(GlobalContext)

  return (
    <Layout>
      <>
        <section className='w-full h-auto'>

          {/* Home */}
          <div className='w-full h-3/4 border border-slate-300 
            dark:border-slate-600' 
            id='home'>
            <div className='w-full h-full'>
              <div className='w-full h-full flex flex-col absolute space-y-96 py-6 items-center 
                  lg:space-y-0 lg:items-start lg:pt-32 lg:justify-start'>

                <input className='outline-none p-3 rounded-full shadow-sm 
                  transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12
                  lg:hidden'
                  placeholder=' San Francisco' type='search' name='' id=''/>

                <div className='hidden h-auto pb-6 
                  lg:w-2/5 lg:flex'>
                  <p className='text-4xl ml-16 font-bold text-white'>Encuentra lo que necesites</p>
                </div>

                <button className='w-48 rounded-full text-lg text-primary font-semibold p-4 bg-white 
                  transition duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 
                  lg:ml-16'>
                  Explorar
                </button>
              </div>

              <div className='w-full h-full bg-cover object-cover
                lg:h-96 lg:bg-azoguesDesktop lg:bg-center'>
                <img className='lg:hidden' src='../src/assets/img/azogues.jpeg' alt='San Francisco Azogues' />
              </div> 
            </div>
          </div>

          {/* Recomendados */}
          <div className='w-full h-auto divide-y divide-slate-400 dark:divide-slate-700
            ContentGrid' id='recommendations'>    
            <p className='PageTitle pt-6 
              lg:w-4/5'>Recomendados</p> 
            
            {/* scrollbar-hide md:scrollbar-default */}
            <div className='w-auto h-auto items-center mt-2 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 
              scrollbar-hide
              lg:w-4/5'>

              {
                context.items?.map(item => (
                  <CardInfo key={item.id} data={item} />
                ))
              }
            </div>
          </div>

          {/* Noticias Destacadas */}
          <div className='w-full h-auto divide-y divide-slate-400 dark:divide-slate-700
            ContentGrid' id='outstanding_news'>
            <p className='PageTitle pt-6 
              lg:w-4/5'>Noticias Destacadas</p>
            
            {/* Realizado con Grid */}
            <div className='w-full h-full mt-2 p-6 grid grid-rows-4 grid-flow-col gap-6 
              lg:w-4/5'>
              
              <div className='w-full h-96 lg:row-span-6 lg:h-full lg:bg-center'>
                <CardNews />
              </div>
             
              <div className='w-full h-96 lg:row-span-2 lg:col-span-2'>
                <CardNews />
              </div>
              
              <div className='w-full h-96 lg:row-span-2 lg:col-span-2'>
                <CardNews />  
              </div>
              
              <div className='w-full h-96 lg:row-span-2 lg:col-span-2'>
                <CardNews />
              </div>
            </div>
          </div>

          {/* FAQS p-6 */}
          <div className='w-full h-auto divide-y divide-slate-400 dark:divide-slate-700
            ContentGrid' id='faqs'>
            <p className='PageTitle pt-6
              lg:w-4/5'>FAQS</p>

            <div className='w-full h-full mt-2 p-6 flex flex-col space-y-4
              lg:w-4/5'>
              <div>
                <p className='text-xl font-medium text-primary dark:text-white'>Política de Cancelación</p>
                <p className='text-sm pt-2 dark:text-white'>
                  Para estancias menores a una semana es importante avisar con 3 días de
                  anticipación, de caso contario será sancionado.
                </p>
              </div>
              <div>
                <p className='text-xl font-medium text-primary dark:text-white'>Métodos de pago</p>
                <p className='text-sm pt-2 dark:text-white'>
                  Aceptamos distintos métodos de pago: VISA, MasterCard, American Express,
                  Paypal y Binance
                </p>
              </div>
              <div>
                <p className='text-xl font-medium text-primary dark:text-white'>Mascotas</p>
                <p className='text-sm pt-2 dark:text-white'>El tema de las mascotas dependerá directamente del anfitrión.</p>
              </div>
              <div>
                <p className='text-xl font-medium text-primary dark:text-white'>Información de Seguridad</p>
                <p className='text-sm pt-2 dark:text-white'>
                  Todas nuestras estancias cuentan con seguro en caso de accidentes
                </p>
              </div>
              <div>
                <p className='text-xl font-medium text-primary dark:text-white'>Estancias Largas</p>
                <p className='text-sm pt-2 dark:text-white'>
                  Contamos con estancias de hasta 3 meses, en este caso es requerido un
                  anticipo con un monto del 50% del valor de la renta
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* FOOTER  */}
        <footer className='w-full h-auto bg-gray-200 text-gray-500 border border-slate-300 p-6 mt-6 space-y-2 rounded-t-3xl 
          dark:bg-gray-900 dark:text-white dark:border-slate-700' 
          id='about_us'>
          <div className='p-6 w-full h-full'>
            <p className='text-lg text-primary font-bold pb-6 mt-6
              dark:text-white'>Sobre Nosotros</p>
            <p className='text-sm'>Municipio</p>
            <p className='text-sm'>Contacto</p>
            <p className='text-sm'>Enlaces</p>
            <p className='text-sm'>Términos y Condiciones</p>
            <p className='text-sm pb-96'>Siguenos</p>
          </div>
          <p className='text-sm'>
            © 2024 Sistemas Gad Azogues all rights reserved
          </p>
          
        </footer>
      </>
    </Layout>
  )
}

export default Home

// function Home() {
//   //dark-mode
  // const [theme, setTheme] = useState( ()=>{
  //   if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  //     return 'dark';
  //   }else{
  //     return 'light';
  //   }
  // });

  // useEffect( ()=>{
  //   if(theme === 'dark'){
  //     document.querySelector('html').classList.add('dark');
  //   }else{
  //     document.querySelector('html').classList.remove('dark');
  //   }
  // }, [theme] );

  // const handleChangeTheme= ()=> {
  //   setTheme( (prevTheme)=> (prevTheme === 'light'? 'dark' : 'light') );
  // };
//   //dark-mode

//   return (
//     <>
//       <header>
//         <nav className='w-full h-15 hidden bg-white lg:flex p-4 justify-between fixed z-10
//            dark:bg-gray-800'>
//           <div className='w-auto h-auto justify-center items-center'>
//             <p className='text-xl text-primary font-black 
//               dark:text-white '> Alcaldía de Azogues</p> 
//           </div>
//           <div className='flex space-x-8 justify-center items-center
//             font-bold text-sm text-primary 
//               dark:text-white '>
//             <a href='#home'>Inicio</a>
//             <a href='#home'>Municipio</a>
//             <a href='#recommendations'>Recomentados</a> 
//             <a href='#outstanding_news'>Noticias</a>
//             <a href='#home'>Webmail</a>
//             {/* <a href='#home'>Tr&aacute;mites</a> */}
//             <a href='#home'>Consultas</a>
//             <a href='#home'>Concursos</a>
//             <a href='#faqs'>FAQS</a>
//             <a href='#about_us'>Sobre Nosotros</a>
//           </div>
//           <div className='flex space-x-4 justify-center items-center'>
//             <MagnifyingGlassIcon className='size-5 text-primary hover:cursor-pointer 
//               dark:text-white' />
//             <button onClick={ handleChangeTheme }>
//               <MoonIcon className='size-5 text-primary hover:cursor-pointer 
//                 dark:text-white' />
//             </button>
//             <UserIcon className='size-5 text-gray-400 hover:cursor-pointer 
//               dark:text-white' />
//           </div>
//         </nav>
//       </header>




//       <main>
//         <section className=' w-full h-auto'>

//           {/* Home */}
//           <div className='w-full h-3/4' id='home'>
//             <div className='w-full h-full'>
//               <div className='w-full h-full flex flex-col absolute space-y-96 py-6 items-center 
//                 lg:space-y-0 lg:items-start lg:pt-32 lg:justify-start'>
//                 <input className=' outline-none p-3 rounded-full shadow-sm 
//                   transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12
//                   lg:hidden' 
//                   placeholder=' San Francisco' type='search' name='' id=''/>
//                 <div className='hidden h-auto lg:w-2/5 lg:flex pb-6'>
//                   <p className='text-4xl ml-16 font-bold text-white'>Encuentra lo que necesites</p>
//                 </div>
//                 <button className='w-48 rounded-full text-lg text-primary font-semibold p-4 bg-white 
//                   transition duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 
//                   lg:ml-16'>
//                   Explorar
//                 </button>
//               </div>
//               <div className='w-full h-full 
//                 lg:h-96 lg:bg-azoguesDesktop lg:bg-center'>
//                 <img className='lg:hidden' src='../src/assets/img/azogues.jpeg' alt='San Francisco Azogues' />
//               </div> 
//             </div>
//           </div>

//           {/* Recomendados */}
//           <div className='w-full h-auto
//              ContentGrid' id='recommendations'>    
//             <p className='PageTitle pt-6 
//               lg:w-4/5'>Recomendados</p> 
            
//             {/* scrollbar-hide md:scrollbar-default */}
//             <div className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 
//               scrollbar-hide
//               lg:w-4/5'>

//               <div className='Card'>
//                 <div className='w-full h-3/5 bg-catedral2 bg-cover rounded-t-lg'></div>
//                 {/* App.css Card:nth-child */}
//                 {/* div className='w-full h-2/5 bg-secondary rounded-b-lg'> */}
//                 <div className='w-full h-2/5 rounded-b-lg'>
//                   <p className='font-bold text-xl px-4 py-2'>Catedral</p>
//                   <p className='px-3'>Hermosa Catedral de Azogues</p>
//                 </div>
//               </div>

//               <div className='Card'>
//                 <div className='w-full h-3/5 bg-gadAzogues bg-cover rounded-t-lg'></div>
//                 {/* <div className='w-full h-2/5 bg-white rounded-b-lg'> */}
//                 <div className='w-full h-2/5 rounded-b-lg'>
//                   <p className='font-bold text-xl px-4 py-2'>Gad Municipal</p>
//                   <p className='px-3'>Municipalidad de Azogues</p>
//                 </div>
//               </div>

//               <div className='Card'>
//                 <div className='w-full h-3/5 bg-catedralNoche bg-cover rounded-t-lg'></div>
//                 <div className='w-full h-2/5 rounded-b-lg'>
//                   <p className='font-bold text-xl px-4 py-2'>Catedral</p>
//                   <p className='px-3'>Catedral de Azogues en la noche</p>
//                 </div>
//               </div>

//               <div className='Card'>
//                 <div className='w-full h-3/5 bg-gadAzogues2 bg-cover rounded-t-lg'></div>
//                 <div className='w-full h-2/5 rounded-b-lg'>
//                   <p className='font-bold text-xl px-4 py-2'>Gad Municipal</p>
//                   <p className='px-3'>Municipalidad de Azogues</p>
//                 </div>
//               </div>

//               <div className='Card'>
//                 <div className='w-full h-3/5 bg-sanFrancisco bg-cover rounded-t-lg'></div>
//                 <div className='w-full h-2/5 rounded-b-lg'>
//                   <p className='font-bold text-xl px-4 py-2'>Catedral</p>
//                   <p className='px-3'>Iglesia San Francisco de Azogues</p>
//                 </div>
//               </div>

//               <div className='Card'>
//                 <div className='w-full h-3/5 bg-gadAzogues2 bg-cover rounded-t-lg'></div>
//                 <div className='w-full h-2/5 rounded-b-lg'>
//                   <p className='font-bold text-xl px-4 py-2'>Gad Municipal</p>
//                   <p className='px-3'>Municipalidad de Azogues</p>
//                 </div>
//               </div>

//               <div className='Card'>
//                 <div className='w-full h-3/5 bg-gadAzogues bg-cover rounded-t-lg'></div>
//                 <div className='w-full h-2/5 rounded-b-lg'>
//                   <p className='font-bold text-xl px-4 py-2'>Gad Municipal</p>
//                   <p className='px-3'>Municipalidad de Azogues</p>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Noticias Destacadas */}
//           <div className='w-full h-auto
//             ContentGrid' id='outstanding_news'>
//             <p className='PageTitle pt-6 
//               lg:w-4/5'>Noticias Destacadas</p>
            
//             {/* Realizado con Grid */}
//             <div className='w-full h-full p-6 grid grid-rows-4 grid-flow-col gap-6 
//               lg:w-4/5'>
              
//               <div className='w-full h-96 bg-cojitambo bg-cover rounded-xl 
//                 lg:row-span-6 lg:h-full lg:bg-center'>
//                 <p className='CardTitle'> Cojitambo</p>
//                 <p className='text-lg font-semibold pl-8 text-black mr-24 '> La hermosa monataña Cojitambo</p>
//               </div>
//               <div className='w-full h-96 bg-estatua bg-cover rounded-xl 
//                 lg:row-span-2 lg:col-span-2'>
//                 <p className='CardTitle'> Estatua</p>
//                 <p className='text-lg font-semibold pl-8 text-white mr-24 '> Estatua de la Catedral</p>
//               </div>
//               <div className='w-full h-96 bg-sanFrancisco3 bg-cover rounded-xl 
//                 lg:row-span-2 lg:col-span-2'>
//                 <p className='CardTitle'> San Francisco</p>
//                 <p className='text-lg font-semibold pl-8 text-black mr-24 '> Escalinata de San Francisco</p>
//               </div>
//               <div className='w-full h-96 bg-sanFrancisco2 bg-cover rounded-xl 
//                 lg:row-span-2 lg:col-span-2'>
//                 <p className='CardTitle'> San Francisco 2</p>
//                 <p className='text-lg font-semibold pl-8 text-white mr-24 '> San Francisco</p>
//               </div>
//             </div>
//           </div>

//           {/* FAQS p-6 */}
//           <div className='w-full h-auto 
//             ContentGrid' id='faqs'>
//             <p className='PageTitle pt-6
//               lg:w-4/5'>FAQS</p>

//             <div className='w-full h-full p-6 flex flex-col space-y-4
//               lg:w-4/5'>
//               <div>
//                 <p className='text-xl font-medium text-primary dark:text-white'>Política de Cancelación</p>
//                 <p className='text-sm pt-2 dark:text-white'>
//                   Para estancias menores a una semana es importante avisar con 3 días de
//                   anticipación, de caso contario será sancionado.
//                 </p>
//               </div>
//               <div>
//                 <p className='text-xl font-medium text-primary dark:text-white'>Métodos de pago</p>
//                 <p className='text-sm pt-2 dark:text-white'>
//                   Aceptamos distintos métodos de pago: VISA, MasterCard, American Express,
//                   Paypal y Binance
//                 </p>
//               </div>
//               <div>
//                 <p className='text-xl font-medium text-primary dark:text-white'>Mascotas</p>
//                 <p className='text-sm pt-2 dark:text-white'>El tema de las mascotas dependerá directamente del anfitrión.</p>
//               </div>
//               <div>
//                 <p className='text-xl font-medium text-primary dark:text-white'>Información de Seguridad</p>
//                 <p className='text-sm pt-2 dark:text-white'>
//                   Todas nuestras estancias cuentan con seguro en caso de accidentes
//                 </p>
//               </div>
//               <div>
//                 <p className='text-xl font-medium text-primary dark:text-white'>Estancias Largas</p>
//                 <p className='text-sm pt-2 dark:text-white'>
//                   Contamos con estancias de hasta 3 meses, en este caso es requerido un
//                   anticipo con un monto del 50% del valor de la renta
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <footer className='w-full h-auto bg-gray-200 text-gray-400 p-6 mt-6 space-y-2 rounded-t-3xl' id='about_us'>
//           <div className='p-6 w-full h-full'>
//             <p className='text-lg text-primary font-bold pb-6 mt-6'>Sobre Nosotros</p>
//             <p className='text-sm'>Municipio</p>
//             <p className='text-sm'>Contacto</p>
//             <p className='text-sm'>Enlaces</p>
//             <p className='text-sm'>Términos y Condiciones</p>
//             <p className='text-sm pb-96'>Siguenos</p>
//           </div>
//         </footer>

//         {/* NAV MOVILE */}
//         <div className='w-full h-16 bg-gray-700 fixed left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center rounded-t-3xl lg:hidden' id='tab_bar'>
//           <a href='#home'>
//             <HomeModernIcon className='size-7 text-gray-200 hover:cursor-pointer' />
//           </a>
//           <a href='#recommendations'>
//             <MagnifyingGlassIcon className='size-7 text-gray-200 hover:cursor-pointer' />
//           </a>
//           <a href='#outstanding_news'>
//             <NewspaperIcon className='size-7 text-gray-200 hover:cursor-pointer' />
//           </a>
//           <button onClick={ handleChangeTheme }>
//             <MoonIcon className='size-7 text-gray-200 hover:cursor-pointer' />
//           </button>
//           <a href='#faqs'>
//             <IdentificationIcon className='size-7 text-gray-200 hover:cursor-pointer' />
//           </a>
//         </div>
//       </main>
//     </>
//   )
// }

//export default Home

