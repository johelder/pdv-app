import { TNavigationProps } from '../../routes/types';

export type TRegisterProductProps = TNavigationProps<'RegisterProduct'>;

export interface IProductData {
  name: string;
  code: string;
  price: string;
  description: string;
}
