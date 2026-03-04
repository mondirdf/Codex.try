# Palette Journal

## 2025-05-15 - Contact Form Submission Feedback
**Learning:** In static or simple JS-driven forms, failing to clear previous feedback messages and aria-invalid states during re-submission leads to a confusing user experience. Users might still see a "Success" message while a new validation error has occurred, or see multiple conflicting states.
**Action:** Always clear feedback text and reset all `aria-invalid` attributes at the very beginning of the submit event handler before starting new validation or async simulation.
