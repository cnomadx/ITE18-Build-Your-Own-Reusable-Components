# Campus Directory

Campus Directory is a two-page Vue 3 and Vite project with three fictional student records.

## Run locally

Requires Node.js 18 or newer.

```sh
npm ci
npm run dev
```

Open the address Vite prints. The Directory lives at `/` and the About page at `/about/`. Run `npm run build` to generate both pages in `dist/`.

## Follow the component reuse

- Both pages mount `app/App.vue`, which renders `AppHeader` and `AppFooter` around the current page.
- `DirectoryPage.vue` loops over the records in `app/students.js` and provides each record to `StudentCard.vue` through the `student` prop. Edit a record there to see its card update. The card emits a `view` event when the visitor requests the profile.
- `AboutPage.vue` renders several instances of `InfoCard.vue` with different `title` and `description` props.
- `AppButton.vue` takes a `label` and a `color` of `primary`, `soft`, or `light`. It renders a link when given an `href` and a button otherwise.

The student names, IDs, programs, and bios are fictional.
