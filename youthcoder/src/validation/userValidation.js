const RequestValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === '') {
    errors.name = 'Nama harus diisi';
  }
  if (!values.title || values.title === '') {
    errors.title = 'Pertanyaan harus diisi';
  }

  return errors;
};

export default RequestValidation;
