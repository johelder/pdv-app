import { ReactNode } from 'react';

export interface IButtonNavigationProps {
  type: 'new-sale' | 'register-product' | 'register-category' | 'registered';
}

export interface IButtonNavigationColors {
  color: 'primary' | 'products' | 'categories' | 'registered';
}

export interface ISale {}

export interface IModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
  swipeDirection?: 'up' | 'down';
  children: ReactNode;
}
