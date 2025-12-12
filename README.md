# Resonance Status Badges

This is an **Orphan Branch** used specifically to store generated assets (SVG Badges) for the **Resonance Hugo Theme**.

> **Automated Branch:** Do not edit files in this branch manually. They are automatically generated and committed by GitHub Actions from the `main` branch.

## Available Badges

| Badge | File Name | Description 
| :--- | :--- | :--- |
| ![Hugo](hugo.svg)  | `hugo.svg` | Supported Hugo Version (from `package.json`) |
| ![Tailwind](tailwindcss.svg) | `tailwindcss.svg` | Tailwind CSS Version |
| ![AlpineJs](alpinedotjs.svg) | `alpinedotjs.svg` | Alpine.js CSP Version |
| [![Playwright](playwright.svg)](https://github.com/oxypteros/hugo-theme-resonance/actions)  | `playwright.svg` | End-to-End Test Status (Pass/Fail) | 
| [![Pagespeed](lighthouse.svg)](https://pagespeed.web.dev/report?url=https://resonance.oxypteros.com) | `lighthouse.svg` | Google PageSpeed Performance Score |

These badges are updated by the following workflows in the `main` branch and the `docs` repo:
1.  **Playwright Tests:** Runs E2E tests and updates `playwright.svg`.
2.  **Generate Dev Stack Badges:** Reads `package.json` and updates stack badges.
3.  **Lighthouse Audit:** Scans the live site and pushes `lighthouse.svg`.
