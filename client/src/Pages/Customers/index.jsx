import Layout from '../../Components/Layout';
import { CustomerForm } from '../../Components/Forms/CustomerForm';

function Customers() {
  return (
    <Layout>
      <div className='text-center '>
        <h2 className='p-2'>Registro de Usuario Trámites</h2>
        <CustomerForm />
      </div>
    </Layout>
  );
}

export default Customers;
