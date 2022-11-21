import { api } from '../api';
import { ICategoryPayload } from './types';

export const category = {
  create: async (category: ICategoryPayload) => {
    try {
      const response = await api.post<ICategoryPayload>(
        '/categories',
        category,
      );

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
