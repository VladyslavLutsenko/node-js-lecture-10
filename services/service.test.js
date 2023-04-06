const service = require('./service');

describe('service', () => {
  it('test', () => {
    const mockFunc = jest.fn((x) => x * 2);

    const result = mockFunc(2);

    expect(result).toBe(4);
    expect(mockFunc).toHaveBeenCalledWith(2);
  });

  it('test 2', () => {
    const getAllSpy = jest.spyOn(service, 'getAll');
    const result = service.getAll();

    expect(result).toEqual([1,2,3]);
  })
})
