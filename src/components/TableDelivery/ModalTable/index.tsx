import React, { ReactElement, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import { TableBody, TableHeader } from '../..';

import { Pedido } from '../../../interfaces/DeliveryData';

const ModalTable = (): ReactElement => {
  const [pedido, setPedido] = useState<Pedido[]>();

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Pedidos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table>
          <thead>
            <TableHeader typeTitle="modal" />
          </thead>
          <tbody>
            {pedido ? (
              <>
                {pedido.map((item) => {
                  <TableBody order={item} />;
                })}
              </>
            ) : null}
          </tbody>
          <tfoot></tfoot>
        </Table>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </>
  );
};

export default ModalTable;
