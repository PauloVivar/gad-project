
import ReactDOM from 'react-dom'; 

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className='flex justify-center items-center bg-slate-300 fixed top-0 left-0 right-0 bottom-0'>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal }