## 2025-05-15 - [Accessible Form Validation in Vanilla JS]
**Learning:** In a vanilla JS environment without a UI library, manually managing the relationship between invalid inputs and their error messages using `aria-invalid` and `aria-describedby` is crucial for screen reader users. Additionally, moving focus to the first invalid field significantly improves the experience for keyboard and screen reader users.
**Action:** Always implement a helper function (like `showError`) to consistently apply ARIA attributes and manage focus during form validation failures.
