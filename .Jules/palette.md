# Palette Journal

## 2025-05-15 - [Accessible Form Validation Pattern]
**Learning:** In a static HTML/JS project, manual management of ARIA attributes (`aria-invalid`, `aria-describedby`, `aria-live`) and focus is essential for accessibility. Providing real-time validation reset via `input` listeners prevents "stale" error states which can be confusing for screen reader users.
**Action:** Use the `setError` and `clearErrors` helper pattern with an immediate `input` event listener to clear invalid states as soon as the user starts correcting their entry.
