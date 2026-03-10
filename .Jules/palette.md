# Palette Journal

## 2026-05-18 - Accessible Form Validation with Focus Management
**Learning:** For a smooth and accessible form experience, validation should not only provide a visual message but also programmatically guide the user. Using `aria-invalid`, `aria-describedby`, and moving focus to the first invalid field ensures that keyboard and screen reader users can immediately identify and correct errors. Additionally, clearing these states in real-time as the user types (via `input` listeners) prevents stale error states from confusing the user.
**Action:** Always implement a three-pillar validation UX: 1) ARIA status management (`aria-invalid`), 2) Focus management (move focus to error), and 3) Real-time state reset.
