import i18next from 'i18next';

export const getFormInputs = () => {
  const t = i18next.t;

  return [
    {
      id: 'subject',
      label: 'text',
      placeholder: t('contact.form.subject'),
      isRequired: false,
    },
    {
      id: 'name',
      label: 'text',
      placeholder: t('contact.form.name'),
      isRequired: true,
    },
    {
      id: 'email',
      label: 'email',
      placeholder: t('contact.form.email'),
      isRequired: true,
    },
    {
      id: 'phone',
      label: 'tel',
      placeholder: t('contact.form.phone'),
      isRequired: false,
    },
    {
      id: 'message',
      label: 'textarea',
      placeholder: t('contact.form.message'),
      isRequired: true,
    },
  ];
};
