//import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { now, getLocalTimeZone } from '@internationalized/date';
import { registerRequestCustomer } from '../../../api/customers';

//import { GlobalContext } from '../../../Context/GlobalContext';
import {
  Tabs,
  Tab,
  Input,
  //Link,
  Button,
  Card,
  CardBody,
  DatePicker,
  Select,
  SelectItem,
} from '@nextui-org/react';

import { gender, civilStatus, disability, ethnicity } from './data';

function CustomerForm() {

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      ci: '',
      fingerprintCode: '',
      passport: '',
    }
  });

  // const {
  //   addCustomer
  // } = useContext(GlobalContext);

  //Tabs
  const [selected, setSelected] = useState('naturalPerson');

  //Selected ci or passport
  const [valueDocumentType, setValueDocumentType] = useState('');

  const handleSelectionChangeDT = (e) => {
    setValueDocumentType(e.target.value);
  };

  const onSubmit = handleSubmit(async (values)=>{
    const res = await registerRequestCustomer(values);
    console.log(res);
  });

  //onSubmit={ handleSubmit( (values) => {console.log(values)}) } 

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
              <form className='flex flex-col gap-4' 
                onSubmit={ onSubmit }>
                <h3 className='pt-2'>Información Básica</h3>
                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    type='text'
                    label='Nombres'
                    placeholder='Juan Roman'
                    //value={newCustomerValue}
                    //onChange={onChange}            
                    {...register('name')}
                  />
                  <Input
                    isRequired
                    type='text'
                    label='Apellidos'
                    placeholder='Vivar Perez'
                    {...register('lastName')}
                  />
                </div>
                
                <div className='flex justify-between gap-3'>
                  <Select
                    isRequired
                    label='Tipo persona'
                    placeholder='Una opción'
                    className='max-w-full'
                    selectedKeys={[valueDocumentType]}
                    onChange={handleSelectionChangeDT}
                    //{...register('documentTypes')}
                  >
                    <SelectItem key='ci1'>
                      Natural
                    </SelectItem>
                    <SelectItem key='passport1'>
                      Extranjero
                    </SelectItem>
                  </Select>
                  <Controller
                    name='birthdate'
                    control={control}
                    render={({ field }) =>
                      <DatePicker
                        isRequired
                        type='date'
                        label='Fecha Nacimiento'
                        hideTimeZone
                        showMonthAndYearPickers
                        defaultValue={now(getLocalTimeZone())}
                        {...field}
                      />
                    }
                  />
                </div>
                <div className='flex justify-between gap-3'>
                  <div className={`flex w-full gap-3 ${valueDocumentType === 'ci1' ? 'visible' : 'hidden'} `}>
                    <Input
                      //isRequired
                      type='text'
                      isClearable
                      label='Cédula'
                      placeholder='0302000001'
                      {...register('ci')}
                    />
                    <Input
                      //isRequired
                      type='text'
                      label='Código Dactilar Cédula'
                      placeholder='V0006V0001'
                      {...register('fingerprintCode')}
                    />
                  </div>
                  <div className={`flex w-1/2 gap-3 ${valueDocumentType === 'passport1' ? 'visible' : 'hidden'} `}>
                    <Input
                      //isRequired
                      type='text'
                      label='Pasaporte'
                      placeholder='AB123456'
                      {...register('passport')}
                    />
                  </div>
                </div>
                
                <div className='flex justify-between gap-3'>
                  <Select
                    isRequired
                    items={gender}
                    label='Género'
                    placeholder='Una opción'
                    className='max-w-full'
                    {...register('gender')}
                  >
                    {(gender) => <SelectItem>{gender.label}</SelectItem>}
                  </Select>
                  <Select
                    isRequired
                    items={civilStatus}
                    label='Estado Civil'
                    placeholder='Una opción'
                    className='max-w-full'
                    {...register('civilStatus')}
                  >
                    {civilStatus.map((item) => (
                      <SelectItem key={item.key}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div className='flex justify-between gap-3'>
                  <Select
                    isRequired
                    items={disability}
                    label='Discapacidad'
                    placeholder='Una opción'
                    className='max-w-full'
                    {...register('disability')}
                  >
                    {(disability) => <SelectItem>{disability.label}</SelectItem>}
                  </Select>
                  <Select
                    isRequired
                    items={ethnicity}
                    label='Etnia'
                    placeholder='Una opción'
                    className='max-w-full'
                    {...register('ethnicity')}
                  >
                    {(ethnicity) => <SelectItem>{ethnicity.label}</SelectItem>}
                  </Select>
                </div>

                <h3 className='pt-2'>Contacto</h3>
                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    type='text'
                    label='Calle Principal'
                    placeholder='Av. 16 de Abril'
                    {...register('primaryStreet')}
                  />
                  <Input
                    type='text'
                    label='Calle Secundaria'
                    placeholder='Ingrese calle secundaria'
                    {...register('secondaryStreet')}
                  />
                </div>

                <Input
                  type='text'
                  label='Referencia Domicilio'
                  placeholder='Parque Infantil'
                  {...register('reference')}
                />

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    type='text'
                    label='Celular'
                    placeholder='0998888888'
                    {...register('cellphone')}
                  />
                  <Input
                    type='text'
                    label='Teléfono'
                    placeholder='072244444'
                    {...register('phone')}
                  />
                </div>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    type='email'
                    label='Email'
                    placeholder='ejemplo@mail.com'
                    {...register('email')}
                  />
                  {/* <Input
                    isRequired
                    type='email'
                    label='Confirmar Email'
                    placeholder='Confirme su email'
                    {...register('email')}
                  /> */}
                </div>

                <div className='flex justify-between gap-3'>
                  <Input
                    isRequired
                    type='password'
                    label='Contraseña'
                    placeholder='Ingrese su contraseña'
                    {...register('password')}
                  />
                  {/* <Input
                    isRequired
                    type='password'
                    label='Confirmar Contraseña'
                    placeholder='Confirme su contraseña'
                    {...register('password')}
                  /> */}
                </div>

                {/* <div className='flex justify-between gap-3'>
                  <Input
                    //isRequired
                    type='file'
                    label='Cédula Escaneada'
                    placeholder='Selecionar archivo'
                    {...register('file')}
                  />
                  <Input
                    isRequired
                    label='Código de Validación'
                    placeholder='123456'
                    {...register('code')}
                  />
                </div>

                <p className='text-center text-small'>
                  ¿Necesita crear una Cuenta?{' '}
                  <Link
                    size='sm'
                    onPress={() => setSelected('sign-up')}>
                    Sign up
                  </Link>
                </p> */}

                <div className='flex gap-3 justify-center'>
                  <Button
                    type='submit'
                    color='primary'
                  >
                    Registrar Datos
                  </Button>
                </div>

              </form>
            </Tab>

            {/* <Tab
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

                <div className='flex gap-3 justify-center'>
                  <Button
                    color='primary'>
                    Registrarte
                  </Button>
                </div>
              </form>
            </Tab> */}

          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export { CustomerForm };
