# Palette Journal

## 2025-05-14 - Accessible Color Swatches
**Learning:** Empty visual elements like color swatches are ignored by screen readers. Using `role="img"` and `aria-label` makes them accessible informative elements.
**Action:** Always provide descriptive ARIA labels for decorative elements that carry meaning (like color palettes).

## 2025-05-14 - Atomic Accessible Form Validation
**Learning:** Real-time validation feedback should be balanced. Setting `aria-invalid` on submit is crucial for accessibility, but clearing it on `input` provides a better UX by removing "error" state as soon as the user attempts to fix it.
**Action:** Use a `setError` helper to manage `aria-invalid`, `aria-describedby`, and `focus` simultaneously. Clear these attributes on `input` to prevent persistent error UI.
