//import React from 'react';
import Layout from '../../Components/Layout';
import { AccountForm } from '../../Components/Forms/AccountForm';

function Login() {
  return (
    <Layout>
      <div className='text-center '>
        <h2 className='p-2'>Account</h2>
        <AccountForm />
      </div>
    </Layout>
  );
}

export default Login;
