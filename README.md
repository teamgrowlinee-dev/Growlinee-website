# Growlinee Website

## How to deploy to shared hosting

1. Build the static export:
   - `npm ci`
   - `npm run build`
2. Upload the file `public/deploy/site.zip` to your hosting account.
3. Extract the ZIP into `/htdocs`.
4. Ensure `index.html` is directly under `/htdocs` (not inside a subfolder).

This project uses Next.js static export (`output: "export"`), so it runs on shared hosting without a Node.js runtime.
