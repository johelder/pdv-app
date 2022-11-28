import * as yup from 'yup';

export const categorySchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  code: yup.string(),
  description: yup.string(),
});

export const defaultValues = {
  name: '',
  code: '',
  description: '',
};
