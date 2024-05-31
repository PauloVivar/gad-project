//import React from 'react';
import { useContext, useCallback } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from '@nextui-org/react';

import { columns } from './data';

import { PencilSquareIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';

const statusColorMap = {
  activo: 'success',
  paused: 'danger',
  vacation: 'warning',
};

function TableDynamic() {
  const context = useContext(GlobalContext);

  // ACTIONS data -> context.users/ context.customers
  const renderCell = useCallback((data, columnKey) => {
    const cellValue = data[columnKey];
    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: data.user.avatar }}
            description={data.user.email}
            // name={cellValue}
            name={data.name + ' ' + data.lastName}>
            {data.user.email}
          </User>
        );
      case 'password':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{data.user.password}</p>
          </div>
        );
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{data.user.role}</p>
            <p className='text-bold text-sm capitalize text-default-400'>{data.user.team}</p>
          </div>
        );
      case 'address':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{data.address.city}</p>
            <p className='text-bold text-sm capitalize text-default-400'>{data.address.primaryStreet}</p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className='capitalize'
            color={statusColorMap[data.user.status]}
            size='sm'
            variant='flat'>
            {data.user.status}
          </Chip>
        );
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Details'>
              <span className='size-4 text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content='Edit user'>
              <span className='size-4 text-lg text-green-400 cursor-pointer active:opacity-50'>
                <PencilSquareIcon />
              </span>
            </Tooltip>
            <Tooltip
              color='danger'
              content='Delete user'>
              <span className='size-4 text-lg text-danger cursor-pointer active:opacity-50'>
                <TrashIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  // TABLE
  return (
    <>
      <p className='pb-4'>TableDynamic</p>

      {/* context.items?.map(item => (
        <CardInfo key={item.id} data={item} />
      )) */}

      <Table
        className='w-3/4'
        aria-label='Example table with dynamic content'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody items={context.customers}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>

        {/* <TableBody items={context.users}>
          {(item) => (
            <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody> */}
      </Table>
    </>
  );
}

export default TableDynamic;
