import bcryptjs from 'bcryptjs';

export const encrypt = async (passwordPlain) => {
  const hash = bcryptjs.hash(passwordPlain, 10);
  return hash;
};


/**
 * @param {any} passwordPlain Password a comparar
 * @param {any} hash Hash con el que se compara 
 * @returns {Promise} 
 */
export async function compare(passwordPlain, hash) {
  return bcryptjs.compare(passwordPlain, hash);
}
