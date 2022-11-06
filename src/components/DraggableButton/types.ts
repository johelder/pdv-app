import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface IDraggableButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  color: string;
}

export type TGestureHandlerContext = {
  translateX: number;
  translateY: number;
};
