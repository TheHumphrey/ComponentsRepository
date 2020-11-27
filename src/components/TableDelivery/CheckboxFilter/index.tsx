import React, { ReactElement } from 'react';

import CheckboxFilterStyle from './style';

interface Props {
  titles: string[];
  service(text: string): void;
}

const CheckboxFilter = ({ titles, service }: Props): ReactElement => {
  return (
    <CheckboxFilterStyle>
      {titles.map((item, index) => (
        <label key={index}>
          <input type="checkbox" onClick={() => service(item)} name={item} />
          {item}
        </label>
      ))}
    </CheckboxFilterStyle>
  );
};

export default CheckboxFilter;
