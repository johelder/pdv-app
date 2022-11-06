import { IProduct } from '../Home/types';

export interface ICategory {
  id: number;
  name: string;
  description: string;
  status: string;
  products: IProduct[];
}
