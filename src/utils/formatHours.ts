export const formatHours = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(date));
};
