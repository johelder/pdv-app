import { ReactNode } from 'react';

export interface IModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
  swipeDirection?: 'up' | 'down';
  children: ReactNode;
  modalPosition?: 'bottom' | 'center';
}
