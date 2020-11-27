import React, { ReactElement } from 'react';

import TableHeaderStyle from './style';

interface Props {
  typeTitle: 'delivery' | 'modal';
}

const TableHeader = ({ typeTitle }: Props): ReactElement => {
  return (
    <>
      {typeTitle === 'delivery' ? (
        <TableHeaderStyle>
          <th>Alerta</th>
          <th>Ativo</th>
          <th>
            Velocidade<span>(%)</span>
          </th>
          <th>
            Trajeto<span>(%)</span>
          </th>
          <th>Aderencia</th>
          <th>
            Temperatura<span className="temp">(°c)</span>
          </th>
          <th>
            Umidade<span className="temp">(%)</span>
          </th>
          <th>
            Bateria<span className="money">(%)</span>
          </th>
          <th>Entregas</th>
          <th>Detalhes</th>
        </TableHeaderStyle>
      ) : (
        <TableHeaderStyle>
          <th>Status</th>
          <th>Vendedor</th>
          <th>Emissor</th>
          <th>Data da Emissão</th>
          <th>NF</th>
          <th>
            Valor<span className="money">(R$)</span>
          </th>
          <th>Peso(Kg)</th>
          <th>CT-e</th>
          <th>
            Frete<span className="money">(R$)</span>
          </th>
          <th>Pagamento</th>
        </TableHeaderStyle>
      )}
    </>
  );
};

export default TableHeader;
