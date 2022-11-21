import { ICategory } from '../../pages/SelectProducts/types';
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

  findAll: async () => {
    try {
      const response = await api.get<ICategory[]>('/categories');

      return {
        ok: true,
        data: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        data: [],
        error,
      };
    }
  },
};
