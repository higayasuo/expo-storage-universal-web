# expo-storage-universal-web

Web implementation of [expo-storage-universal](https://github.com/higayasuo/expo-storage-universal).

## Features

- `WebRegularStorage`: Non-secure storage implementation using `sessionStorage`
- `WebSecureStorage`: Secure storage implementation using `sessionStorage` (Note: For truly secure storage, use NativeSecureStorage on native platforms)

## Installation

```bash
# Install both packages
npm install expo-storage-universal expo-storage-universal-web
```

Note: `expo-storage-universal` is a peer dependency of this package.

## Usage

```typescript
import {
  WebRegularStorage,
  WebSecureStorage,
} from 'expo-storage-universal-web';

// For regular storage
const regularStorage = new WebRegularStorage();
await regularStorage.save('userId', '12345');
const userId = await regularStorage.find('userId');
await regularStorage.remove('userId');

// For secure storage
const secureStorage = new WebSecureStorage();
await secureStorage.save('authToken', 'your-token');
const token = await secureStorage.find('authToken');
await secureStorage.remove('authToken');
```

## API

### WebRegularStorage

- `find(key: string): Promise<string | undefined>` - Retrieves a value from storage
- `save(key: string, value: string): Promise<void>` - Saves a value to storage
- `remove(key: string): Promise<void>` - Removes a value from storage

### WebSecureStorage

- `find(key: string): Promise<string | undefined>` - Retrieves a value from storage
- `save(key: string, value: string): Promise<void>` - Saves a value to storage
- `remove(key: string): Promise<void>` - Removes a value from storage

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Type checking
npm run typecheck

# Linting
npm run lint
```

## License

MIT
