import { TouchableOpacityProps } from 'react-native';
import { ISale } from '../../pages/Home/types';

export interface ISaleButtonProps extends TouchableOpacityProps {
  sale: ISale;
  dailyPosition: number;
}
