# Palette Journal

## 2026-03-05 - [Form Validation Accessibility]
**Learning:** For accessible form validation, it is not enough to just show an error message. You must programmatically manage focus and use ARIA attributes to connect errors to their fields.
**Action:** Always reset `aria-invalid` on submit, set `aria-invalid="true"` and `aria-describedby` pointing to the error message on invalid fields, and call `.focus()` on the first invalid element.
