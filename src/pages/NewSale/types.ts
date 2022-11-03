import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../../routes/types';

type TNavigationProps = NativeStackScreenProps<TRootStackParamList, 'NewSale'>;

export interface INewSaleProps extends TNavigationProps {}
