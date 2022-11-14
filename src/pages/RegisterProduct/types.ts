import { TNavigationProps } from '../../routes/types';

export type TRegisterProductProps = TNavigationProps<'RegisterProduct'>;

export interface IRegisterProductData {
  name: string;
  code: string;
  price: number;
  description: string;
}
