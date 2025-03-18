# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2024-03-18

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
