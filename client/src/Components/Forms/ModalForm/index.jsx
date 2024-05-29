//import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  DatePicker,
  Input,
  RadioGroup,
  Radio,
  cn,
} from '@nextui-org/react';
//Icons
import { EnvelopeIcon, LockClosedIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

export const CustomRadio = (props) => {
  const { ...otherProps } = props;
  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse  cursor-pointer rounded-lg gap-1 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        ),
      }}></Radio>
  );
};

function ModalForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className='pb-4'>Formulario Usuarios</div>

      <Button
        onPress={onOpen}
        color='primary'>
        Create User
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='top'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Create User</ModalHeader>
              <ModalBody>
                <div className='flex justify-between gap-1'>
                  <Input
                    endContent={
                      <PencilSquareIcon className='size-6 text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                    label='Nombre'
                    placeholder='Ingrese su nombre'
                    variant='bordered'
                  />
                  <Input
                    endContent={
                      <PencilSquareIcon className='size-6 text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                    label='Apellido'
                    placeholder='Ingrese su apellido'
                    variant='bordered'
                  />
                </div>
                <Input
                  autoFocus
                  endContent={
                    <EnvelopeIcon className='size-6 text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  label='Email'
                  placeholder='Ingrese su email'
                  variant='bordered'
                />
                <Input
                  endContent={
                    <LockClosedIcon className='size-6 text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  label='Password'
                  placeholder='Ingrese su password'
                  type='password'
                  variant='bordered'
                />
                <Input
                  endContent={
                    <PencilSquareIcon className='size-6 text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  label='CI'
                  placeholder='Ingrese su CI/RUC'
                  variant='bordered'
                />
                <DatePicker
                  label='Birth date'
                  className='w-full'
                  variant='bordered'
                />
                <RadioGroup>
                  <div className='flex justify-between gap-1'>
                    <CustomRadio
                      description='Seleccione genero'
                      value='female'>
                      Mujer
                    </CustomRadio>
                    <CustomRadio
                      description='Seleccione genero'
                      value='male'>
                      Hombre
                    </CustomRadio>
                  </div>
                </RadioGroup>
                <Input
                  endContent={
                    <PencilSquareIcon className='size-6 text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  label='Teléfono'
                  placeholder='Ingrese su Teléfono'
                  variant='bordered'
                />
                <div className='flex justify-between gap-1'>
                  <Input
                    endContent={
                      <PencilSquareIcon className='size-6 text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                    label='Ciudad'
                    placeholder='Ingrese su ciudad'
                    variant='bordered'
                  />
                  <Input
                    endContent={
                      <PencilSquareIcon className='size-6 text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                    label='Dirección'
                    placeholder='Ingrese su dirección'
                    variant='bordered'
                  />
                </div>
              </ModalBody>

              <ModalFooter>
                <Button
                  color='danger'
                  variant='flat'
                  onPress={onClose}>
                  Close
                </Button>
                <Button
                  color='primary'
                  onPress={onClose}>
                  Create User
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalForm;
