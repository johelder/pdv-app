import * as yup from 'yup';

export const productSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  code: yup.string(),
  price: yup.string().required('Valor obrigatório'),
  description: yup.string(),
});

export const defaultValues = {
  name: '',
  code: '',
  price: '',
  description: '',
};
