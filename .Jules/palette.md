# Palette Journal

## 2026-05-24 - [Accessible Form Validation and Visual Cues]
**Learning:** For optimal screen reader support, invalid form fields must be linked to their error messages using the `aria-describedby` attribute. Additionally, managing focus by moving it to the first invalid field upon form submission significantly improves the experience for keyboard and screen reader users. Visual indicators like the required asterisk (*) should be paired with `aria-required="true"` on the input and `aria-hidden="true"` on the marker itself to avoid redundancy.
**Action:** Use a `setError` helper function in validation logic to atomically update the UI state, ARIA attributes, and focus.
