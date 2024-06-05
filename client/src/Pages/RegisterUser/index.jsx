import Layout from '../../Components/Layout';
//import { CustomerForm } from '../../Components/Forms/CustomerForm';
import { UserForm } from '../../Components/Forms/UserForm';

function RegisterUser() {
  return (
    <Layout>
      <div className='text-center '>
        <h2 className='p-2'>Registro de Usuario</h2>
        <UserForm />
      </div>
    </Layout>
  );
}

export default RegisterUser;
