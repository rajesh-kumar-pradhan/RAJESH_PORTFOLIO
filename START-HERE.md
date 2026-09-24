# Open your portfolio

Use **Node.js 24**. Extract the ZIP, open the **raj-portfolio** folder, and open a terminal in the folder containing `package.json`.

```bash
npm install
npm run dev
```

The browser opens automatically at **http://localhost:5173/**, or the next available port printed in the terminal. Keep that terminal open. Press **Ctrl+C** to stop.

To deploy:

```bash
npm run build
```

Publish the **dist** folder. Full editing, photo, and deployment instructions are in **README.md**.

## Add your photo

Replace `public/images/profile.jpg` with your JPG photo. In `src/profile.ts`, set `demoPhoto: false` to remove the demo label. You can also edit your email, GitHub URL, and name there.
