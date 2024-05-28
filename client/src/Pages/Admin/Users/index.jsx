//import React from 'react';
import Layout from '../../../Components/Layout';
//import TableComplete from '../../../Components/Tables/TableComplete';
import TableDynamic from '../../../Components/Tables/TableDynamic';
import ModalForm from '../../../Components/Forms/ModalForm';

function Users() {
  return (
    <Layout>
      <ModalForm />
      {/* <TableComplete /> */}
      <TableDynamic />

    </Layout>
  )
}

export default Users;
