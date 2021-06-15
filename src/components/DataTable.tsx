import React, { useMemo } from 'react'
import { Column, HeaderGroup, useSortBy, useTable } from 'react-table'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { chakra, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

type TableData = {
  fromUnit: string
  toUnit: string
  factor: number
}

type HeadProps = {
  headerGroups: HeaderGroup<TableData>[]
}

const Head: React.FC<HeadProps> = ({ headerGroups }) => {
  console.log(headerGroups)

  return (
    <Thead>
      {headerGroups.map(headerGroup => (
        <Tr
          {...headerGroup.getHeaderGroupProps()}
          key={headerGroup.getHeaderGroupProps().key}>
          {headerGroup.headers.map(column => (
            <Th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              key={column.id}>
              {column.render('Header')}
              <chakra.span pl="4">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <TriangleDownIcon aria-label="sorted descending" />
                  ) : (
                    <TriangleUpIcon aria-label="sorted ascending" />
                  )
                ) : null}
              </chakra.span>
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  )
}

export const DataTable = () => {
  const data = useMemo<TableData[]>(
    () => [
      {
        fromUnit: 'inches',
        toUnit: 'millimetres (mm)',
        factor: 25.4,
      },
      {
        fromUnit: 'feet',
        toUnit: 'centimetres (cm)',
        factor: 30.48,
      },
      {
        fromUnit: 'yards',
        toUnit: 'metres (m)',
        factor: 0.91444,
      },
    ],
    [],
  )

  const columns = useMemo<Column<TableData>[]>(
    () => [
      {
        Header: 'To convert',
        accessor: 'fromUnit',
      },
      {
        Header: 'Into',
        accessor: 'toUnit',
      },
      {
        Header: 'Multiply by',
        accessor: 'factor',
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({ columns, data }, useSortBy)

  return (
    <Table {...getTableProps()}>
      <Head headerGroups={headerGroups} />
      <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)

          return (
            <Tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()} key={cell.value}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
