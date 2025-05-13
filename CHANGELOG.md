# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.6] - 2025-05-13

### Changed

- Updated expo-storage-universal dependency to ^0.3.6

## [0.3.5] - 2025-05-13

### Changed

- Updated expo-storage-universal dependency to ^0.3.5

### Deprecated

- None

### Removed

- None

### Fixed

- None

### Security

- None

## [0.3.4] - 2025-05-05

### Changed

- Updated expo-storage-universal dependency to ^0.3.4

### Deprecated

- None

### Removed

- None

### Fixed

- None

### Security

- None

## [0.3.3] - 2025-04-30

### Changed

- Updated expo-storage-universal dependency to ^0.3.3

### Deprecated

- None

### Removed

- None

### Fixed

- None

### Security

- None

## [0.3.2] - 2025-03-18

### Changed

- Updated expo-storage-universal dependency to ^0.3.2

### Deprecated

- None

### Removed

- None

### Fixed

- None

### Security

- None

## [0.3.1] - 2025-03-18

### Changed

- Updated file extensions in build output to use `.js` for ES modules and `.cjs` for CommonJS modules
- Updated package.json to match the new file extensions
- Updated expo-storage-universal dependency to ^0.3.1

## [0.3.0] - 2025-03-18

### Added

- Initial release
- `WebRegularStorage` class for non-secure storage using `sessionStorage`
- `WebSecureStorage` class for secure storage using `sessionStorage`
- TypeScript support
- Unit tests with Vitest
- Build configuration with Vite
- ESLint configuration
- Comprehensive documentation

### Changed

- None

### Deprecated

- None

### Removed

- None

### Fixed

- None

### Security

- Note: `WebSecureStorage` is not truly secure as it uses `sessionStorage`. For truly secure storage, use NativeSecureStorage on native platforms.
