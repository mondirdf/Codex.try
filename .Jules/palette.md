# Palette Journal

## 2025-05-15 - [Accessible Form Validation in RTL]
**Learning:** For RTL forms with custom validation, manual management of ARIA attributes (`aria-invalid`, `aria-describedby`) and focus is essential. Visual required markers should be hidden from screen readers using `aria-hidden="true"` to avoid redundancy with the `required` attribute. Real-time clearing of error states via `input` listeners significantly improves UX by providing immediate feedback as users correct their mistakes.
**Action:** Always implement a `setError` helper to atomically manage ARIA and focus, and use `input` listeners to clear invalid states.
