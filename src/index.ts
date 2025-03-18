/**
 * Web implementation of expo-storage-universal
 */

export interface Storage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
}

export class WebStorage implements Storage {
  constructor(private storage: globalThis.Storage) {}

  async getItem(key: string): Promise<string | null> {
    return this.storage.getItem(key);
  }

  async setItem(key: string, value: string): Promise<void> {
    this.storage.setItem(key, value);
  }

  async removeItem(key: string): Promise<void> {
    this.storage.removeItem(key);
  }

  async clear(): Promise<void> {
    this.storage.clear();
  }
}

export const createWebStorage = (): Storage => {
  if (typeof window === 'undefined') {
    throw new Error('WebStorage is only available in browser environments');
  }
  return new WebStorage(window.localStorage);
};