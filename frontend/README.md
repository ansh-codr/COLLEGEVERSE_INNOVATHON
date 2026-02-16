# CollegeVerse Frontend Basic Integration

Minimal Next.js frontend to verify backend APIs using Firebase Auth + Axios.

## Folder Structure

```
frontend/
  components/
    AuthGuard.jsx
    ErrorBanner.jsx
    Layout.jsx
  context/
    AuthContext.jsx
  lib/
    axiosClient.js
    firebaseClient.js
  pages/
    _app.js
    index.jsx
    login.jsx
    dashboard.jsx
    leaderboard.jsx
    events.jsx
    jobs.jsx
    notifications.jsx
    admin.jsx
  .env.example
  package.json
```

## Firebase Config
Set values in `frontend/.env.local` from your Firebase web app:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

## Backend API Base URL
- `NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api/v1`

## Axios Token Interceptor
- `lib/axiosClient.js` automatically attaches `Authorization: Bearer <Firebase ID token>`.

## Auth Guard
- `components/AuthGuard.jsx` protects pages and supports role/subRole checks.

## Basic Layout
- `components/Layout.jsx` provides minimal navigation and logout.

## Run

```bash
cd frontend
npm install
npm run dev
```

Then open:
- `/login`
- `/dashboard`
- `/leaderboard`
- `/events`
- `/jobs`
- `/notifications`
- `/admin`

## Notes
- No Firestore client usage in frontend.
- API errors are displayed on each page via `ErrorBanner`.
- This is intentionally minimal for backend functional testing.
