import { ReactNode } from 'react';

export interface IDraggableButtonProps {
  children: ReactNode;
  color: string;
}

export type TGestureHandlerContext = {
  translateX: number;
  translateY: number;
};
