export type DeliveryData = {
  ativo: string;
  velocidade: number;
  trajeto: number;
  aderencia: number;
  temperatura: number;
  umidade: number;
  dispositivo: Device;
  entregas: Deliveries[];
};

export type Device = {
  bateria: number;
};

export type Deliveries = {
  status: number;
  ordem: number;
  pedido: Pedido;
  cliente: string;
};

export type Pedido = {
  status: number;
  NotaFiscal: number;
  peso: number;
  valor: number;
  dataEmissao: string;
  emissor: string;
  vendedor: string;
  cte: number;
  tipoPagamento: string;
  frete: number;
};
