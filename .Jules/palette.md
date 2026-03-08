# Palette Journal

## 2026-05-18 - Atomic Form Validation Accessibility
**Learning:** For a more accessible form experience, validation errors should not only show a message but also programmatically flag the input as invalid (`aria-invalid`), link it to the error description (`aria-describedby`), and move keyboard focus to it immediately. This ensures screen reader users are notified and guided to fix the issue.
**Action:** Use a `setError` helper in form submission handlers to atomically update error text, manage ARIA attributes, and set focus to the first invalid field.
