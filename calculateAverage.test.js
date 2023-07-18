const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  getLatest, // can also be a `getter or setter if supported`
};

function getLatest(index = messages.items.length - 1) {
  return messages.items[index];
}

describe.skip('reading messages', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should get the latest message with a spy', () => {
    const spy = jest.spyOn(messages, 'getLatest');
    expect(messages.getLatest()).toEqual(
      messages.items[messages.items.length - 1]
    );

    spy.mockName('getLatest');
    expect(spy.getMockName()).toEqual('getLatest'); //getMockName return the name wicht is called with mockName
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockImplementationOnce(() => 'access-restricted'); // Accepts a function that will be used as an implementation of the mock for one call to the mocked function.Can be chained so that multiple function calls produce different results.
    expect(messages.getLatest()).toEqual('access-restricted');

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it.skip('should get with a mock', () => {
    const mock = jest.fn().mockImplementation(getLatest);

    expect(mock()).toEqual(messages.items[messages.items.length - 1]);
    expect(mock).toHaveBeenCalledTimes(1);

    mock.mockImplementationOnce(() => 'access-restricted');
    expect(mock()).toEqual('access-restricted');

    expect(mock).toHaveBeenCalledTimes(2);

    expect(mock()).toEqual(messages.items[messages.items.length - 1]);
    expect(mock).toHaveBeenCalledTimes(3);
  });
});
