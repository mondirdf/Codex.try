# Palette Journal

## 2026-05-19 - Accessible Form Validation Pattern
**Learning:** Real-time validation feedback is most effective when errors are cleared as soon as the user begins correcting the field. Using `aria-invalid` paired with an `input` listener provides a smooth UX. However, care must be taken when clearing `aria-describedby` to avoid removing persistent helper text.
**Action:** Use a more surgical approach when clearing ARIA attributes if the element has multiple descriptions.
