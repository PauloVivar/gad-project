
//import React from 'react'
import { useContext, useCallback } from 'react'
import { GlobalContext } from '../../../Context'

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip} from "@nextui-org/react";

import {columns} from "./data";

import { PencilSquareIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid'

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

function TableDynamic() {

  const context = useContext(GlobalContext)
  
  // ACTIONS context.users
  const renderCell = useCallback((user, columnKey) => {
    
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.rol}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.creationAt]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="size-4 text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="size-4 text-lg text-green-400 cursor-pointer active:opacity-50">
                <PencilSquareIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="size-4 text-lg text-danger cursor-pointer active:opacity-50">
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

      <Table className='w-3/4' aria-label='Example table with dynamic content'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody items={context.users}>
          {(item) => (
            <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
        
      </Table>
    </> 
  )
}

export default TableDynamic