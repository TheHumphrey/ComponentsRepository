import styled from 'styled-components';

const LoginComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 97%;
  width: 100%;

  .submit {
    color: #4d5969;
    font-weight: 700;
    border-radius: 5px;
    width: 14rem;

    margin-top: 1rem;

    background-color: #fff;
    border-color: #fff;
    box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
      0 1px 2px 0 rgba(0, 0, 0, 0.08);
  }

  .submit:hover {
    color: #010305 !important;
    font-weight: 700;
    box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.1), 0 3px 9px 0 rgba(43, 45, 80, 0.08),
      0 1px 1.5px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  }

  .submit:active {
    background-color: #e6e6e6;
    border-color: #dfdfdf;
  }

  .submit:focus {
    outline: 0px dotted;
  }
`;

export default LoginComponentStyle;
