import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  DatePicker,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { SelectorUI } from '../../UI/SelectorUI';

import { documentType, civilStatus, disability, ethnicity } from './data';

function UserForm() {
  const {
    addCustomer
  } = useContext(GlobalContext);

  const [selected, setSelected] = React.useState('login');

  const [valueDocumentType, setValueDocumentType] = React.useState("");

  //Estado local para capturar información ingresada en inputs
  const [newCustomerValue, setNewCustomerValue] = React.useState('');

  //Select document type
  const handleSelectionChangeDT = (e) => {
    setValueDocumentType(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addCustomer(newCustomerValue);
    //setOpenModal(false);
  };

  const onChange = (event) => {
    setNewCustomerValue(event.target.value);
  };

  return (
    <div className='flex flex-col w-full'>
      <Card className='max-w-full w-[740px] h-[screen]'>
        <CardBody className='overflow-hidden'>
          <Tabs
            fullWidth
            size='md'
            aria-label='Tabs form'
            selectedKey={selected}
            onSelectionChange={setSelected}>
            <Tab
              key='naturalPerson'
              title='Persona Natural'>
              <form className='flex flex-col gap-4' onSubmit={ onSubmit }>
                <h3 className='pt-2'>Información Básica</h3>
                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Nombres'
                    placeholder='Carlos Roman'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Apellidos'
                    placeholder='Vivar Redrovan'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>
                <div className='flex justify-between gap-3'>
                  <Select
                    isRequired
                    items={documentType}
                    label='Estado Civil'
                    placeholder='Una opción'
                    className='max-w-full'
                    selectedKeys={[valueDocumentType]}
                    onChange={handleSelectionChangeDT}
                  >
                    {(documentType) => <SelectItem>{documentType.label}</SelectItem>}
                  </Select>
                  {
                    <p className="text-small text-default-500">Selected: {valueDocumentType}</p>
                  }
                  <Input
                    isRequired
                    isClearable
                    label='Cédula'
                    placeholder='0302000001'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Código Dactilar Cédula'
                    placeholder='V0006V0001'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Pasaporte'
                    placeholder='AB123456'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <DatePicker
                    isRequired
                    label='Fecha de Nacimiento'
                    //value={newCustomerValue}
                    //onChange={onChange}
                  />
                </div>
                <div className='flex justify-between gap-3'>
                  <SelectorUI isRequired />
                  <Select
                    isRequired
                    items={civilStatus}
                    label='Estado Civil'
                    placeholder='Una opción'
                    className='max-w-full'>
                    {(civilStatus) => <SelectItem>{civilStatus.label}</SelectItem>}
                  </Select>
                </div>
                <div className='flex justify-between gap-3'>
                  <Select
                    isRequired
                    items={disability}
                    label='Discapacidad'
                    placeholder='Una opción'
                    className='max-w-full'>
                    {(disability) => <SelectItem>{disability.label}</SelectItem>}
                  </Select>
                  <Select
                    isRequired
                    items={ethnicity}
                    label='Etnia'
                    placeholder='Una opción'
                    className='max-w-full'>
                    {(ethnicity) => <SelectItem>{ethnicity.label}</SelectItem>}
                  </Select>
                </div>

                <h3 className='pt-2'>Contacto</h3>
                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Calle Principal'
                    placeholder='Av. 16 de Abril'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    label='Calle Secundaria'
                    placeholder='Ingre calle secundaria'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <Input
                  label='Referencia Domicilio'
                  placeholder='Parque Infantil'
                  value={newCustomerValue}
                  onChange={onChange}
                />

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Celular'
                    placeholder='0998888888'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    label='Teléfono'
                    placeholder='072244444'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    label='Teléfono Referencia'
                    placeholder='0997777777'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Email'
                    placeholder='romanv@mail.com'
                    type='email'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Confirmar Email'
                    placeholder='Confirme su email'
                    type='email'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Password'
                    placeholder='Ingrese su password'
                    type='password'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Confirmar Password'
                    placeholder='Confirme su password'
                    type='password'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Cédula Escaneada'
                    placeholder='Selecionar Archivo'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Código de Validación'
                    placeholder='123456'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <p className='text-center text-small'>
                  ¿Necesita crear una Cuenta?{' '}
                  <Link
                    size='sm'
                    onPress={() => setSelected('sign-up')}>
                    Sign up
                  </Link>
                </p>

                <div className='flex gap-3 justify-end'>
                  <Button
                    fullWidth
                    color='primary'>
                    Registrarte
                  </Button>
                </div>
              </form>
            </Tab>

            <Tab
              key='legalPerson'
              title='Persona Juridica'>
              <form className='flex flex-col gap-4'>
                <h3 className='pt-2'>Información Básica</h3>
                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='RUC'
                    placeholder='0170000000001'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Razón Social'
                    placeholder='EMPRESA CÍA. LTDA.'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>
                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Nombre Comercial'
                    placeholder='EMPRESA 123'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <DatePicker
                    isRequired
                    label='Fecha Inicio Actividades'
                    //value={newCustomerValue}
                    //onChange={onChange}
                  />
                </div>

                <h3 className='pt-2'>Contacto</h3>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Calle Principal'
                    placeholder='Av. 16 de Abril'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    label='Calle Secundaria'
                    placeholder='Ingre su password'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <Input
                  label='Referencia Domicilio'
                  placeholder='Parque Infantil'
                  value={newCustomerValue}
                  onChange={onChange}
                />

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Celular'
                    placeholder='0998888888'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    label='Teléfono'
                    placeholder='072244444'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    label='Teléfono Referencia'
                    placeholder='0997777777'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Email'
                    placeholder='romanv@mail.com'
                    type='email'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Confirmar Email'
                    placeholder='Confirme su email'
                    type='email'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Password'
                    placeholder='Ingrese su password'
                    type='password'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Confirmar Password'
                    placeholder='Confirme su password'
                    type='password'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    label='Documento Adjunto'
                    placeholder='Adjuntar un PDF con RUC, Representante Legal y Cédula Representante Legal'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                  <Input
                    isRequired
                    label='Código de Validación'
                    placeholder='123456'
                    value={newCustomerValue}
                    onChange={onChange}
                  />
                </div>

                <p className='text-center text-small'>
                  ¿Necesita crear una Cuenta?{' '}
                  <Link
                    size='sm'
                    onPress={() => setSelected('sign-up')}>
                    Sign up
                  </Link>
                </p>

                <div className='flex gap-3 justify-end'>
                  <Button
                    fullWidth
                    color='primary'>
                    Registrarte
                  </Button>
                </div>
              </form>
            </Tab>

          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export { UserForm };
