'use client';

import { IPageParams } from '@/types';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Spinner,
} from '@nextui-org/react';

import { CheckIcon } from '../components/check-icon';

interface IOrderPage extends IPageParams {}

export const OrdersPage = ({ lang }: IOrderPage) => {
  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>MAHSULOT NOMI</TableColumn>
          <TableColumn>NARXI</TableColumn>
          <TableColumn>BUYURTMA VAQTI</TableColumn>
          <TableColumn>HOLATI</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Samsung S24 FE 8/512GB</TableCell>
            <TableCell>15 000 000 so’m</TableCell>
            <TableCell>23.02.2024 16:30</TableCell>
            <TableCell>
              <Chip
                startContent={<CheckIcon size={18} />}
                color="success"
                variant="bordered"
              >
                Rasmiylashtirildi
              </Chip>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Samsung S24 FE 8/512GB</TableCell>
            <TableCell>15 000 000 so’m</TableCell>
            <TableCell>23.02.2024 16:30</TableCell>
            <TableCell>
              <Chip
                color="danger"
                variant="bordered"
              >
                Bekor qilindi
              </Chip>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Samsung S24 FE 8/512GB</TableCell>
            <TableCell>15 000 000 so’m</TableCell>
            <TableCell>23.02.2024 16:30</TableCell>
            <TableCell>
              <Chip
                startContent={<CheckIcon size={18} />}
                color="success"
                variant="bordered"
              >
                Rasmiylashtirildi
              </Chip>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Samsung S24 FE 8/512GB</TableCell>
            <TableCell>15 000 000 so’m</TableCell>
            <TableCell>23.02.2024 16:30</TableCell>
            <TableCell>
              <Chip
                startContent={
                  <Spinner
                    size="sm"
                    color="warning"
                    labelColor="warning"
                  />
                }
                color="warning"
                variant="bordered"
              >
                Jarayonda
              </Chip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
