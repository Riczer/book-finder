## Book Finder

A cross‑platform (iOS, Android, Web) book discovery app built with Expo Router and React Native. It shows trending titles and recent additions using the Open Library APIs, with smooth lists powered by React Query and FlashList.

### Features

- **Trending books**: Fetches and displays current trending titles
- **New releases**: Shows recently added books (native only; hidden on web)
- **Fast lists**: Uses `@tanstack/react-query` for caching and `@shopify/flash-list` for performant rendering
- **Universal app**: Runs on iOS, Android, and Web (Expo)

### Tech Stack

- **App**: React Native 0.81, Expo 54, Expo Router 6
- **Data**: Axios, React Query
- **UI**: NativeWind (Tailwind CSS for RN), Expo Image
- **Build**: EAS Build, Expo Dev Client

### Getting Started

1. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn
```

2. Configure environment variables

Create a `.env` (or set values in your shell/CI) with the following public Expo vars:

```bash
EXPO_PUBLIC_BOOK_API_URL=https://openlibrary.org
EXPO_PUBLIC_BOOK_IMAGE_API_URL=https://covers.openlibrary.org
```

These are read in `constants.ts` and used by `services/apiClient.ts` and image components.

3. Start the app

```bash
# Start with dev client (recommended for native development)
pnpm start

# Web
pnpm web

# iOS simulator (requires Xcode)
pnpm ios

# Android emulator / device
pnpm android
```

### Scripts

- `start`: `expo start --dev-client`
- `web`: `expo start --web`
- `ios`: `expo run:ios`
- `android`: `expo run:android`
- `prebuild`: `expo prebuild`
- `build:dev`: `eas build --profile development`
- `build:preview`: `eas build --profile preview`
- `build:prod`: `eas build --profile production`
- `lint`: ESLint + Prettier check
- `format`: ESLint fix + Prettier write

### Building (EAS)

EAS profiles are defined in `eas.json`.

```bash
# Auth (one-time)
eas login

# Development build (internal distribution)
pnpm build:dev

# Production build
pnpm build:prod
```

### Project Structure

```text
app/                 # Expo Router routes (`index.tsx`, `details.tsx`, layout)
components/          # UI components (books lists, skeletons, etc.)
services/            # API client and Open Library service calls
assets/              # App icons, splash, images
android/             # Native Android project (generated/managed)
```

Key files:

- `services/apiClient.ts`: Axios instance with `EXPO_PUBLIC_BOOK_API_URL`
- `services/bookServices.ts`: `getTrendingBooks`, `getAddedBooks`, `getBooks`
- `constants.ts`: Reads `EXPO_PUBLIC_BOOK_API_URL` and `EXPO_PUBLIC_BOOK_IMAGE_API_URL`
- `app/_layout.tsx`: Sets up React Query provider and global styles
- `app/index.tsx`: Home screen with queries and lists

### Environment

This project uses Expo public env vars (prefixed with `EXPO_PUBLIC_`). When building with EAS or running locally, ensure they are present. For EAS, set them in the dashboard or via `eas secret:create`.

### API Notes

- Trending: `/trending/now.json?limit=10`
- Recent changes: `/recentchanges/add-book.json?limit=10`
- Books (brief): `/api/volumes/brief/json/{olid|olid|...}`

### Troubleshooting

- If native builds fail on first run, execute `pnpm prebuild` to sync native projects.
- Clear Metro cache if you see stale module errors:

```bash
expo start -c
```

- On Android, ensure an emulator is running or a device is connected (`adb devices`).

### License

MIT
