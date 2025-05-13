import { Storage } from 'expo-storage-universal';

/**
 * WebRegularStorage class implementing the Storage interface for web platforms.
 * Utilizes localStorage with prefix for non-secure data storage in browsers.
 */
export class WebRegularStorage implements Storage {
  private readonly REGULAR_PREFIX = 'regular_';

  /**
   * Creates a new instance of WebRegularStorage.
   */
  constructor() {}

  /**
   * Retrieves a value from localStorage with proper prefix.
   * @param {string} key - The key of the item to retrieve.
   * @returns {Promise<string | undefined>} - A promise that resolves to the retrieved value or undefined if not found.
   * @example
   * const value = await storage.find('userId');
   */
  async find(key: string): Promise<string | undefined> {
    return localStorage.getItem(this.REGULAR_PREFIX + key) ?? undefined;
  }

  /**
   * Saves a value to localStorage with proper prefix.
   * @param {string} key - The key under which the value should be stored.
   * @param {string} value - The value to store.
   * @returns {Promise<void>} - A promise that resolves when the value has been saved.
   * @example
   * await storage.save('userId', '12345');
   */
  async save(key: string, value: string): Promise<void> {
    localStorage.setItem(this.REGULAR_PREFIX + key, value);
  }

  /**
   * Removes a value from localStorage with proper prefix.
   * @param {string} key - The key of the item to remove.
   * @returns {Promise<void>} - A promise that resolves when the value has been removed.
   * @example
   * await storage.remove('userId');
   */
  async remove(key: string): Promise<void> {
    localStorage.removeItem(this.REGULAR_PREFIX + key);
  }
}
