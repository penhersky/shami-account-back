import jwt from 'jsonwebtoken';

import { USER_TOKEN_SECURITY_KEY, CLIENT_URL } from '../../config';

export default (
  userId: string,
): { forTitle: string; object: string; html: string } => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 60);
  const token = jwt.sign(
    { userId, expiresIn: Number(date) },
    String(USER_TOKEN_SECURITY_KEY),
    {
      expiresIn: '6h',
    },
  );

  // object
  const object = 'Your confirmation link';

  // forTitle
  const forTitle = 'Welcome';

  // html
  const html = `
    <h3>Password recovery</h3>
    <a href="${CLIENT_URL}/singUp/s2/${token}" >Restore</a>
  `;
  return {
    html,
    object,
    forTitle,
  };
};
