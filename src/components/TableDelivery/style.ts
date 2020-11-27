import styled from 'styled-components';

const TableDeliveryStyle = styled.div`
  margin-top: 1rem;
  width: 97vw;

  box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);

  .card-header {
    background-color: #fff;
    border: 0;
  }

  .card-body {
    padding: 0 !important;
  }

  .filterTable {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;

    h5 {
      width: 20rem;
      font-size: 1.33rem;
      font-weight: 700;
      color: #344050;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .input-group {
      margin: 0 !important;
      margin-right: 0.5rem !important;
    }

    .btn {
      color: #4d5969;
      font-weight: 700;
      margin-right: 0.5rem;

      background-color: #fff;
      border-color: #fff;
      box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
        0 1px 2px 0 rgba(0, 0, 0, 0.08);
    }

    .btn:hover {
      color: #010305 !important;
      font-weight: 700;
      box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.1), 0 3px 9px 0 rgba(43, 45, 80, 0.08),
        0 1px 1.5px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    }

    .btn:active {
      background-color: #e6e6e6;
      border-color: #dfdfdf;
    }
  }

  .table {
    margin: 0;
  }

  .table td,
  .table th {
    border-top: 1px solid #edf2f9;
  }

  .table th {
    user-select: none;
    color: #344050 !important;
    background-color: #edf2f9 !important;
  }

  table th:hover {
    cursor: pointer;
  }

  .table th:focus {
    outline: none;
  }

  .table th:last-child:hover {
    cursor: default;
  }

  .table th:first-child:hover {
    cursor: default;
  }

  tbody {
    overflow-y: auto;
    overflow-x: hidden;
  }

  tbody tr:hover td {
    background: #e2eff8;
  }

  tbody tr:active td {
    background: #c1ddf1;
  }

  td,
  th {
    vertical-align: middle;
    text-align: center;
  }

  th {
    font-weight: 700;
  }

  td {
    font-weight: 500;
  }

  @media (max-width: 1474px) {
    .squareCustom {
      width: 550px;
    }
  }
  @media (max-width: 1426px) {
    .squareCustom {
      width: 500px;
    }
  }
  @media (max-width: 1386px) {
    .squareCustom {
      width: 450px;
    }
  }
  @media (max-width: 1326px) {
    .filterTable {
      h5 {
        font-size: 1.25rem;
      }
    }
    .squareCustom {
      width: 400px;
    }
  }
  @media (max-width: 1200px) {
    .filterTable {
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 1068px) {
    .filterTable {
      h5 {
        font-size: 1.1rem;
      }
    }
  }
  @media (max-width: 926px) {
    .filterTable {
      h5 {
        font-size: 0.9rem;
      }
    }
  }

  .andamento {
    color: rgba(140, 140, 140, 0.7);
  }

  .entregue {
    color: rgba(0, 239, 39, 0.7);
  }

  .reentrega {
    color: rgba(210, 0, 214, 0.7);
  }

  .naoEntregue {
    color: rgba(255, 0, 0, 0.7);
  }

  .parcial {
    color: rgba(230, 230, 0, 0.7);
  }

  .roxo {
    color: rgba(210, 0, 214, 0.7);
  }

  .alarm {
    color: rgba(255, 0, 0, 0.7);
  }

  .temp {
    color: rgba(0, 100, 255, 0.9);
  }

  .sequencia {
    color: rgba(0, 239, 39, 0.7);
  }

  .humid {
    color: rgba(0, 239, 39, 0.7);
  }

  .batery {
    color: rgba(255, 0, 0, 0.7);
  }
`;

export default TableDeliveryStyle;
