import cather from '../src/wrappers/resolverCather';

describe('# resolver cather', () => {
  it('success', async () => {
    const result = await cather(() => 'ok');
    expect(typeof result === 'string');
    expect(result).toEqual('ok');
  });
  it('throw new Error', async () => {
    const result = await cather(() => new Error('test Error'));
    expect(typeof result === 'object');
    expect(result).toEqual(new Error('test Error'));
  });
  it('auth validation', async () => {
    const result = await cather(
      () => 'ok',
      null,
      () => 'Access denied',
    );
    expect(typeof result === 'object');
    expect(result).toEqual(new Error('Access denied'));
  });
});
