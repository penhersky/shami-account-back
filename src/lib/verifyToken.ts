import JWT from 'jsonwebtoken';

export default (token: string, Secret: string): string | any => {
  try {
    return JWT.verify(token, Secret);
  } catch (error) {
    return 'Invalid token!';
  }
};
