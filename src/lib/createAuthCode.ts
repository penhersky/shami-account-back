import bcrypt from 'bcrypt';

import { isDevelopment, SALT } from '../config';

export default async () => {
  const code = Math.floor(Math.random() * 1000000);
  if (isDevelopment) console.log(code);
  const salt = await bcrypt.genSalt(Number(SALT));
  const hash = await bcrypt.hash(code.toString(), salt);
  return { code, hash };
};
