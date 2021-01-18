import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('The title is required.')
    .min(5, 'The title should have at least 5 characters.'),
  url: Yup.string()
    .required('The url is required.')
    .url('The url should be a valid url.'),
  description: Yup.string()
    .min(30, 'The description should be at least 30 characters long')
    .required('The description is required.'),
  tags: Yup.string().required('There should be at least 1 tag'),
});
