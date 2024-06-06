import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGlobal } from '../../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

import { Tabs, Tab, Input, Link, Button, Card, CardBody } from '@nextui-org/react';

function AccountForm() {
  //Tab
  const [selected, setSelected] = useState('login');
  //Form
  const { register, handleSubmit } = useForm();
  //GlobalContext
  //const { signUp, isAuthenticated, errors } = useGlobal();
  const { signUp, isAuthenticated } = useGlobal();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isAuthenticated) navigate('/admin');
  },[isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);  //validar el estado
    signUp(values);
  });

  return (
    <div className='flex flex-col w-full'>
      <Card className='max-w-full w-[340px] h-[full]'>
        <CardBody className='overflow-hidden'>
          <Tabs
            fullWidth
            size='md'
            aria-label='Tabs form'
            selectedKey={selected}
            onSelectionChange={setSelected}>
            <Tab
              key='login'
              title='Login'>
              {/* {
                errors.map((error, i) => {
                  <Code color="danger" className='p-2' key={i} >
                    {error}
                  </Code>
                })
              }  */}
              <form
                className='flex flex-col gap-4'
                onSubmit={onSubmit}>
                <Input
                  isRequired
                  label='Email'
                  placeholder='Enter your email'
                  type='email'
                  variant='faded'
                  {...register('email')}
                />
                <Input
                  isRequired
                  label='Password'
                  placeholder='Enter your password'
                  type='password'
                  variant='faded'
                  {...register('password')}
                />
                <Input
                  isRequired
                  label='Cellphone'
                  placeholder='Cellphone'
                  type='text'
                  variant='faded'
                  {...register('cellphone')}
                />
                <p className='text-center text-small'>
                  ¿Necesitas crear una cuenta?{' '}
                  <Link
                    size='sm'
                    onPress={() => setSelected('sign-up')}>
                    Sign up
                  </Link>
                </p>
                <div className='flex gap-2 justify-end'>
                  <Button
                    fullWidth
                    type='submit'
                    color='primary'>
                    Login
                  </Button>
                </div>
              </form>
            </Tab>

            <Tab
              key='sign-up'
              title='Sign up'>
              <form
                className='flex flex-col gap-4 h-[360px]'
                onSubmit={onSubmit}>
                <Input
                  isRequired
                  label='Name'
                  placeholder='Enter your name'
                  type='text'
                  variant='faded'
                  {...register('name')}
                />
                <Input
                  isRequired
                  label='Email'
                  placeholder='Enter your email'
                  type='email'
                  variant='faded'
                  {...register('email')}
                />
                <Input
                  isRequired
                  label='Password'
                  placeholder='Enter your password'
                  type='password'
                  variant='faded'
                  {...register('password')}
                />
                <Input
                  isRequired
                  label='Cellphone'
                  placeholder='Cellphone'
                  type='text'
                  variant='faded'
                  {...register('cellphone')}
                />
                <p className='text-center text-small'>
                  ¿Ya tienes una cuenta?{' '}
                  <Link
                    size='sm'
                    onPress={() => setSelected('login')}>
                    Login
                  </Link>
                </p>
                <div className='flex gap-2 justify-end'>
                  <Button
                    fullWidth
                    type='submit'
                    color='primary'>
                    Sign up
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
export { AccountForm };
