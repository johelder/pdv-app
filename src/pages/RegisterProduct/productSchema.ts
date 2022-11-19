import * as yup from 'yup';

export const productSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  code: yup.string(),
  price: yup
    .number()
    .positive('Valor precisa ser positivo')
    .required('Valor obrigatório')
    .typeError('Informe um valor númerico'),
  description: yup.string(),
});

export const defaultValues = {
  name: '',
  code: '',
  price: '',
  description: '',
};
