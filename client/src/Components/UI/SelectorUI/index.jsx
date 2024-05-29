//import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { gender } from './data';

//className='max-w-xs'>
function SelectorUI() {
  return (
    <Select
      isRequired
      items={gender}
      label='Genero'
      placeholder='Una opción'
      className='max-w-full'>
      {(gender) => <SelectItem>{gender.label}</SelectItem>}
    </Select>
  );
}

export { SelectorUI };
