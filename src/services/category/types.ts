import { IProduct } from '../../components/Product/types';

export interface ICategoryPayload {
  name: string;
  code?: string;
  description?: string;
}

export interface ICategoryResponse extends ICategoryPayload {
  products: IProduct[];
}
