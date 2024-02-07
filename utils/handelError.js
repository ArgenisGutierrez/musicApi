export const handleHttpError = (res, message = 'Mensaje de error', code = 403) => {
  res.status(code);
  res.status({ error: message });
}
