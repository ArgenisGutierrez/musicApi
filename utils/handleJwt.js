import jsonwebtoken from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Creacion de Jwt
 * @param {any} user objeto con la informacion del usuario.
 * @returns {jsonwebtoken} 
 */
export const tokenSign = async (user) => {
  const sign = jsonwebtoken.sign({
    _id: user._id,
    role: user.role
  }, JWT_SECRET, { expiresIn: "2h" });

  return sign;
};

/**
 * Verificacion de Jwt.
 * @param {*} tokenJwt 
 * @returns Token decodificado
 */
export const verifytoken = async (tokenJwt) => {
  try {
    jsonwebtoken.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null;
  }
};
