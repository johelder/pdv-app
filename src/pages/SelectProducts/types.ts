import { IProduct } from '../../components/Product/types';

import { TNavigationProps } from '../../routes/types';

export type TSelectProductsProps = TNavigationProps<'SelectProducts'>;

export interface ICategory {
  id: number;
  name: string;
  description: string;
  status: string;
  products: IProduct[];
}
