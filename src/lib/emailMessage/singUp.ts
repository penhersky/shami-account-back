export default (
  type: String,
  code: number,
): { forTitle: string; object: string; html: string } => {
  // object
  const object = 'Your confirmation link';

  // forTitle
  const forTitle = 'Welcome';

  // html
  const message =
    type === 'customer'
      ? 'Find an employee for your business'
      : 'We have many customers who need your skills';
  const html = `
    <h3>Welcome</h3>
    <p>${message}</p>
    <h3>${code}</h3>
  `;
  return {
    html,
    object,
    forTitle,
  };
};
