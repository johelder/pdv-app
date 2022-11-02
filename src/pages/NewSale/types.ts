import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'NewSale'>;

export interface NewSaleProps extends NavigationProps {}
