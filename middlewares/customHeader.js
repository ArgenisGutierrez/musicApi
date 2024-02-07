/**
 * 
 * @class middleware
 * @classdesc leer custom headers
 */
export function customHeader(req, res, next) {
  try {
    const apiKey = req.headers.api_Key;
    if (apiKey === 'arfhel') {
      next();
    } else {
      res.status(403);
      res.send({ error: "El apiKey no es el correcto." });
    }
  }
  catch (err) {
    res.status(403);
    res.send({ error: "Algo ah ocurrido mal con el custom Header." });
  }
};
