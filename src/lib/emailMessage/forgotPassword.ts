export default (
  code: number,
): { forTitle: string; object: string; html: string } => {
  // object
  const object = 'Your confirmation link';

  // forTitle
  const forTitle = 'Welcome';

  // html
  const html = `
    <h3>Password recovery</h3>
    <h3>${code}</h3>
  `;
  return {
    html,
    object,
    forTitle,
  };
};
