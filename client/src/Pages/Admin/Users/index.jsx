//import React from 'react'
import Layout from '../../../Components/Layout'
//import TableComplete from '../../../Components/Table/TableComplete'
import TableDynamic from '../../../Components/Table/TableDynamic'
import ModalForm from '../../../Components/Forms/ModalForm'

function Users() {
  return (
    <Layout>
      <ModalForm />
      {/* <TableComplete /> */}
      <TableDynamic  />

    </Layout>
  )
}

export default Users
