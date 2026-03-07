# Palette Journal

## 2025-05-15 - [Accessible Form Error Handling]
**Learning:** In projects without a formal UI framework, manually implementing `aria-invalid` state management and focusing the first invalid field (`field.focus()`) significantly improves the experience for screen reader and keyboard users.
**Action:** Always clear previous `aria-invalid` states and feedback messages at the start of a submission handler to prevent stale UI states.

## 2025-05-15 - [Color Swatch Accessibility]
**Learning:** Visual elements used to convey brand identity (like color swatches) that are implemented as empty tags must be given `role="img"` and a descriptive `aria-label` to be perceivable by assistive technologies.
**Action:** Audit "Last Project" or "Case Study" sections for unlabelled visual brand indicators.
