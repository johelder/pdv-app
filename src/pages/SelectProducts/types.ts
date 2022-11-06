import { IProduct } from '../../components/Product/types';

export interface ICategory {
  id: number;
  name: string;
  description: string;
  status: string;
  products: IProduct[];
}
