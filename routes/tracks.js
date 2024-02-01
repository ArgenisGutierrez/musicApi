import expres from 'express';
export const tracksRouter = expres.Router();

router.get('/tracks', (req, res) => {
  const data = ["hola", "mundo"];
  res.send({ data });
});
