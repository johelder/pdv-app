import { TNavigationProps } from '../../routes/types';

export type TNewSaleProps = TNavigationProps<'NewSale'>;

export interface IPaymentMethod {
  id: number;
  name: string;
}
