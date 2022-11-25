export interface ISalePayload {
  products: Array<{ id: number; quantity: number }>;
  payment_type: {
    id: number;
    name: string;
  };
  hasChange: boolean;
  changeValue: number;
}
