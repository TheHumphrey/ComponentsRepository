import React, { ReactElement, useState } from 'react';

import ToolTipBodyStyle from './style';

interface Props {
  status: string;
  order: number;
  request: string;
}

const ToolTipBody = ({ status, order, request }: Props): ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <ToolTipBodyStyle>
      <span className="status">Status: {status}</span>
      <span className="order">Ordem: {order}</span>
      <span className="request">Pedido: {request}</span>
      <button
        className="btn-tooltip"
        onClick={() => {
          setShow(true);
        }}
      >
        Detalhes
      </button>
    </ToolTipBodyStyle>
  );
};

export default ToolTipBody;
