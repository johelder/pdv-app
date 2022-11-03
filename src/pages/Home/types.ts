import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../../routes/types';

type TNavigationProps = NativeStackScreenProps<TRootStackParamList, 'Home'>;

export interface IHomeProps extends TNavigationProps {}

export interface IProduct {
  id: number;
  name: string;
  code: string;
  description: string;
  status: string;
  image: string;
  price: number;
}

export interface IProductSold
  extends Pick<IProduct, 'name' | 'code' | 'image'> {
  id: number;
  unity_price: number;
  quantity: number;
  sale_id: number;
}

export interface IPaymentMethod {
  id: number;
  name: string;
}

export interface ISale {
  id: number;
  daily_position: 1 | null;
  change: number;
  total: number;
  createdAt: string;
  products_sold: IProductSold[];
  payment_method: IPaymentMethod;
}
