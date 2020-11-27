import React, { ReactElement } from 'react';

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { ToolTipBody } from '../../';

import { DeliveryData, Pedido } from '../../../interfaces/DeliveryData';

interface Props {
  data?: DeliveryData;
  order?: Pedido;
}

const TableBody = ({ data, order }: Props): ReactElement => {
  const square = [
    { status: 'entregue', id: 1, toolTip: 'entregue' },
    { status: 'entregue', id: 2, toolTip: 'entregue' },
    { status: 'entregue', id: 3, toolTip: 'entregue' },
    { status: 'entregue', id: 4, toolTip: 'entregue' },
    { status: 'entregue', id: 5, toolTip: 'entregue' },
    { status: 'entregue', id: 6, toolTip: 'entregue' },
    { status: 'entregue', id: 7, toolTip: 'entregue' },
    { status: 'entregue', id: 8, toolTip: 'entregue' },
    { status: 'entregue', id: 9, toolTip: 'entregue' },
    { status: 'entregue', id: 10, toolTip: 'entregue' },
    { status: 'entregue', id: 11, toolTip: 'entregue' },
    { status: 'entregue', id: 12, toolTip: 'entregue' },
    { status: 'entregue', id: 13, toolTip: 'entregue' },
    { status: 'entregue', id: 14, toolTip: 'entregue' },
    { status: 'reentrega', id: 15, toolTip: 'reentrega' },
    { status: 'naoEntregue', id: 16, toolTip: 'não entregue' },
    { status: 'reentrega', id: 17, toolTip: 'reentrega' },
    { status: 'naoEntregue', id: 18, toolTip: 'não entregue' },
    { status: 'reentrega', id: 19, toolTip: 'reentrega' },
    { status: 'naoEntregue', id: 20, toolTip: 'não entregue' },
    { status: 'andamento', id: 21, toolTip: 'andamento' },
    { status: 'roxo', id: 22, toolTip: 'roxo' },
    { status: 'andamento', id: 23, toolTip: 'andamento' },
    { status: 'parcial', id: 24, toolTip: 'parcial' },
    { status: 'parcial', id: 25, toolTip: 'parcial' },
    { status: 'parcial', id: 26, toolTip: 'parcial' },
    { status: 'andamento', id: 27, toolTip: 'andamento' },
    { status: 'andamento', id: 28, toolTip: 'andamento' },
    { status: 'andamento', id: 29, toolTip: 'andamento' },
    { status: 'andamento', id: 30, toolTip: 'andamento' },
  ];

  return (
    <>
      {data ? (
        <tr>
          <td>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-wifi"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.385 6.115a.485.485 0 0 0-.048-.736A12.443 12.443 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z" />
              <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z" />
            </svg>
          </td>

          <td>{data.ativo}</td>

          <td>{data.velocidade}</td>

          <td>{data.trajeto}</td>

          <td>{data.aderencia}</td>

          <td className="temp">{data.temperatura}</td>

          <td>{data.umidade}</td>

          <td>{data.dispositivo.bateria}</td>

          <td>{data.entregas.length}</td>

          <td>
            <i className="squareCustom">
              {square.map((el, index) => (
                <OverlayTrigger
                  key={el.id}
                  trigger="click"
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      <ToolTipBody status={el.status} order={index} request={el.toolTip} />
                    </Tooltip>
                  }
                >
                  <svg
                    width="20px"
                    height="1em"
                    viewBox="0 0 16 16"
                    className={el.status}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    key={el.id}
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" key={el.id} />
                  </svg>
                </OverlayTrigger>
              ))}
            </i>
          </td>
        </tr>
      ) : order ? (
        <tr>
          <td>{order.status}</td>
          <td>{order.vendedor}</td>
          <td>{order.emissor}</td>
          <td>{order.dataEmissao}</td>
          <td>{order.NotaFiscal}</td>
          <td>{order.valor}</td>
          <td>{order.peso}</td>
          <td>{order.cte}</td>
          <td>{order.frete}</td>
          <td>{order.tipoPagamento}</td>
        </tr>
      ) : null}
    </>
  );
};

export default TableBody;
