const {timeout} = require('.')

describe('timeout', () => {
  it('resolves to foo', async () => {
    await expect(timeout()).rejects.toMatch('foo');
    // const err = new Error('foo')
    // await expect(timeout()).rejects.toThrow(err);
  });

});
