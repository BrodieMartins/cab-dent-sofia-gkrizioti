import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN_HERE",
  // Environment: set to "production" on live deployment
  environment: "development",
  // Capture 100% of transactions in dev; lower in production (e.g. 0.1)
  tracesSampleRate: 1.0,
});
