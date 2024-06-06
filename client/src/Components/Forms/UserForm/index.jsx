import { useForm } from 'react-hook-form';
import { useGlobal } from '../../../Context/GlobalContext';

import { Input, Button, Card, CardBody } from '@nextui-org/react';

function UserForm() {
  const { register, handleSubmit } = useForm();
  const { signUp, user } = useGlobal();

  console.log(user);

  const onSubmit = handleSubmit(async (values) => {
    //console.log(values);  //validar el estado
    signUp(values);
  });

  return (
    <div className='flex flex-col w-full'>
      <Card className='max-w-full w-[740px] h-[screen]'>
        <CardBody className='overflow-hidden'>
          <form
            className='flex flex-col gap-4'
            onSubmit={onSubmit}>
            <h3 className='pt-2'>Registre sus Datos</h3>

            <div className='flex justify-between gap-3'>
              <Input
                isRequired
                type='email'
                label='Email'
                placeholder='ejemplo@mail.com'
                variant='faded'
                {...register('email')}
              />
              <Input
                isRequired
                type='password'
                label='Contraseña'
                placeholder='Ingrese su contraseña'
                variant='faded'
                {...register('password')}
              />
            </div>

            <Input
              isRequired
              type='text'
              label='Celular'
              placeholder='0998888888'
              variant='faded'
              {...register('cellphone')}
            />

            <div className='flex gap-3 justify-center'>
              <Button
                type='submit'
                color='primary'>
                Registrar Datos
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export { UserForm };
