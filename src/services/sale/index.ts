import { api } from '../api';
import { ISalePayload } from './type';

export const sale = {
  create: async (sale: ISalePayload) => {
    try {
      const response = await api.post('/sales', sale);

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
