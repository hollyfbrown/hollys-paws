# Holly's Paws

Quick start:

1. Create project
   ```bash
   npm create vite@latest hollys-paws -- --template react
   cd hollys-paws
   npm install
   ```

2. Install Tailwind
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Files added in this branch
   - tailwind.config.cjs
   - src/index.css (with Tailwind directives)
   - src/components/Hero.jsx
   - src/components/Services.jsx
   - src/components/QRSection.jsx (Calendly widget uses https://calendly.com/hollyspaws)
   - src/App.jsx
   - src/main.jsx

4. Run
   ```bash
   npm run dev
   ```

Notes:
- Put your QR image in public/qr-code.png or update the <img> src in QRSection.jsx.
- If you prefer the Calendly script in index.html instead of the component, tell me and I’ll move it.
- If you want TypeScript, I can convert these files to .tsx and adjust configuration.
