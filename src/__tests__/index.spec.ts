import { describe, it, expect, beforeEach, vi } from 'vitest';
import { WebStorage, createWebStorage } from '../index';

describe('WebStorage', () => {
  let mockStorage: Storage;
  let webStorage: WebStorage;

  beforeEach(() => {
    mockStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      length: 0,
      key: vi.fn(),
    };
    webStorage = new WebStorage(mockStorage as any);
  });

  it('should get item from storage', async () => {
    const key = 'test-key';
    const value = 'test-value';
    (mockStorage.getItem as any).mockReturnValue(value);

    const result = await webStorage.getItem(key);

    expect(mockStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toBe(value);
  });

  it('should set item in storage', async () => {
    const key = 'test-key';
    const value = 'test-value';

    await webStorage.setItem(key, value);

    expect(mockStorage.setItem).toHaveBeenCalledWith(key, value);
  });

  it('should remove item from storage', async () => {
    const key = 'test-key';

    await webStorage.removeItem(key);

    expect(mockStorage.removeItem).toHaveBeenCalledWith(key);
  });

  it('should clear storage', async () => {
    await webStorage.clear();

    expect(mockStorage.clear).toHaveBeenCalled();
  });
});

describe('createWebStorage', () => {
  it('should create WebStorage instance with localStorage', () => {
    const storage = createWebStorage();
    expect(storage).toBeInstanceOf(WebStorage);
  });

  it('should throw error when window is not defined', () => {
    const originalWindow = global.window;
    // @ts-ignore
    global.window = undefined;

    expect(() => createWebStorage()).toThrow('WebStorage is only available in browser environments');

    // @ts-ignore
    global.window = originalWindow;
  });
});