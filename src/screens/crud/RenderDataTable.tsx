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
  return (
    <Thead>
      {headerGroups.map((headerGroup, index) => (
        <Tr {...headerGroup.getHeaderGroupProps()} key={`${index + 1}`}>
          {headerGroup.headers.map((column, index) => (
            <Th
              color="white"
              {...column.getHeaderProps(column.getSortByToggleProps())}
              key={`${index + 1}`}
            >
              <>
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
              </>
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  )
}

export const RenderDataTable = () => {
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
    <Table
      bg="linear-gradient(157.18deg, rgba(255, 255, 255, 0.58) -59.81%, rgba(255, 255, 255, 0) 102.89%);"
      border="1px solid white"
      padding="50px 37px"
      {...getTableProps()}
    >
      <Head headerGroups={headerGroups} />
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)

          return (
            <Tr {...row.getRowProps()} key={`${index + 1}`}>
              {row.cells.map((cell, index) => (
                <Td color="white" {...cell.getCellProps()} key={`${index + 1}`}>
                  <>{cell.render('Cell')}</>
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
