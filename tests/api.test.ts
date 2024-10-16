// tests/api.test.ts
import  fetchAndStoreData  from '../src/core/api';

beforeEach(() => {
  // Mocking the global fetch function
  global.fetch = jest.fn().mockImplementation((url: string) => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: 'mocked data' }),
    });
  });
});

afterEach(() => {
  jest.resetAllMocks(); // Reset mocks after each test
});

describe('fetchAndStoreData', () => {
  it('fetches data successfully from an API', async () => {
    const data = await fetchAndStoreData('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toEqual({ data: 'mocked data' });
  });

  it('handles fetch errors', async () => {
   
    // (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.reject('API is down'));
    
    // await expect(fetchAndStoreData('https://api.example.com/data')).rejects.toThrow('Fetch failed: API is down');

    // Instead we use new Error as throw new error returns error object

    (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error('API is down')));
    
    await expect(fetchAndStoreData('https://api.example.com/data')).rejects.toThrow(
      new Error('Failed to fetch data: API is down')
    );
    
  });
});
