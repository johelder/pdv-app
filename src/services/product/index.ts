import { api } from '../api';
import { IProductPayload } from './types';

export const product = {
  create: async (product: FormData) => {
    try {
      const response = await api.post<IProductPayload>('/products', product, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return {
        ok: true,
        data: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  },
};
