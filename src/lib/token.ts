import JWT from 'jsonwebtoken';

export const createTempToken = (
  data: any,
  secret: string,
  milliseconds = 30 * 60 * 1000,
) => {
  const d = new Date();
  d.setMilliseconds(d.getMilliseconds() + milliseconds);
  return JWT.sign({ expiresIn: Number(d), ...data }, secret, {
    expiresIn: '31d',
  });
};

export const verify = (token: string, Secret: string): string | any => {
  try {
    return JWT.verify(token, Secret);
  } catch (error) {
    return 'Invalid token!';
  }
};
