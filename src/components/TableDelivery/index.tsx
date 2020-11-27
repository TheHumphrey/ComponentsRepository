import React, { ReactElement, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/Api';

import { Modal, Card, Table, Spinner, InputGroup, FormControl, DropdownButton } from 'react-bootstrap';

import { TableFooter, TableBody, TableHeader, CheckboxFilter, ModalTable } from '../';

import { RootState } from '../../store/reducers/rootReducer';

import { setData } from '../../store/reducers/data/actions';
import { setLoading } from '../../store/reducers/loading/actions';

import TableDeliveryStyle from './style';

const TableDelivery = (): ReactElement => {
  const data = useSelector((state: RootState) => state.data);
  const isLoading = useSelector((state: RootState) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/ativo').then((res) => {
      if (res.statusText == 'OK') {
        dispatch(setData(res.data));
        dispatch(setLoading(false));
      }
    });
  }, []);

  const textFunction = (text: string) => {
    console.log(text);
  };

  return (
    <TableDeliveryStyle>
      <Card>
        <Modal size="xl" show={false} onHide={false}>
          <ModalTable />
        </Modal>
        <Card.Header>
          <div className="filterTable">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-search"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  </svg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => console.log(e.target.value)}
              />
            </InputGroup>
            <div className="buttons">
              <DropdownButton id="dropdown-basic-button" title="Colunas">
                <CheckboxFilter
                  service={textFunction}
                  titles={[
                    'Alarmes',
                    'Ativo',
                    'Velocidade',
                    'Trajeto',
                    'Aderencia',
                    'Temperatura',
                    'Umidade',
                    'Bateria',
                    'Entregas',
                    'Detalhe',
                  ]}
                />
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="Linhas">
                <CheckboxFilter service={textFunction} titles={['15 linhas', '50 linhas', '100 linhas']} />
              </DropdownButton>
            </div>
          </div>
        </Card.Header>

        <Card.Body>
          <Table responsive="md" hover size="sm">
            <thead>
              <TableHeader typeTitle="delivery" />
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={100}>
                    <Spinner animation="border" role="status"></Spinner>
                  </td>
                </tr>
              ) : data ? (
                data.map((item, index) => <TableBody data={item} key={index} />)
              ) : null}
            </tbody>
            <tfoot>
              <TableFooter />
            </tfoot>
          </Table>
        </Card.Body>
      </Card>
    </TableDeliveryStyle>
  );
};

export default TableDelivery;
