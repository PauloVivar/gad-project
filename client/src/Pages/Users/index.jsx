import Layout from '../../Components/Layout';
import { UserForm } from '../../Components/Forms/UserForm';

function Users() {
  return (
    <Layout>
      <div className='text-center '>
        <h2 className='p-2'>Registro de Usuario</h2>
        <UserForm />
      </div>
    </Layout>
  );
}

export default Users;
