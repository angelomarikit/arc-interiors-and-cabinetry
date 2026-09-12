# Put ARC Interiors & Cabinetry on GitHub and Vercel

This project is a static Vite + React site.  
Build command: `npm run build`  
Output folder: `dist`

You do **not** need to run `npm run prepare:images` for deploy. The optimized images are already in `public/images`.

---

## 1. Install Git

1. Download Git: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Install with the default options.
3. Close and reopen PowerShell or Cursor.

Check that Git works:

```powershell
git --version
```

---

## 2. Create a GitHub account and sign in

1. Go to [https://github.com](https://github.com) and create an account if you do not have one.
2. Stay signed in in your browser.

---

## 3. Create a `.gitignore` file first

In the project folder, create a file named `.gitignore` and paste this:

```gitignore
node_modules
dist
.DS_Store
*.log
.vscode
.idea
```

This keeps large/generated files off GitHub.  
**Do keep** `public/images`. Those are the website photos.

---

## 4. Put the project on GitHub

Open PowerShell in this project folder:

`C:\Users\Toptier\Desktop\Arc interiors and cabinetry`

Then run these commands one by one:

```powershell
git init
git add .
git commit -m "Publish ARC Interiors and Cabinetry website"
git branch -M main
```

Next, create the GitHub repository:

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name example: `arc-interiors-and-cabinetry`
3. Keep it **Private** unless you want it public
4. Do **not** add a README, `.gitignore`, or license (this project already has files)
5. Click **Create repository**

GitHub will show commands. Use the `existing repository` option, then run:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace:

- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with the repository name you created

If Git asks you to sign in, use GitHub login / a personal access token.  
Do not paste your GitHub password into Git if GitHub blocks it.

---

## 5. Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up with **Continue with GitHub**
3. Allow Vercel to access your GitHub account
4. Click **Add New…** → **Project**
5. Find `arc-interiors-and-cabinetry` (or your repo name)
6. Click **Import**

Use these settings:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

You do **not** need Environment Variables for this site.

Click **Deploy**.

When it finishes, Vercel gives you a live URL, for example:

`https://arc-interiors-and-cabinetry.vercel.app`

---

## 6. After the first deploy

### Contact form

The inquiry form uses FormSubmit and sends to `erniearcilla@gmail.com`.

The **first** time someone submits the form, FormSubmit emails that Gmail address asking to activate it. Open that email and confirm. After that, new inquiries go to Gmail.

### Later website updates

After you change the site locally:

```powershell
git add .
git commit -m "Update website"
git push
```

Vercel will rebuild and republish automatically.

---

## 7. Optional: custom domain

In Vercel:

1. Open the project
2. Go to **Settings** → **Domains**
3. Add your domain, for example `www.yourdomain.com`
4. Follow Vercel’s DNS instructions at your domain registrar

---

## What not to do

- Do not delete `public/images`
- Do not run `npm run prepare:images` unless you restore the original photo folders
- Do not upload `node_modules` or `dist` to GitHub
- Do not change the FormSubmit email unless you also update the form in `src/components/ContentSections.tsx`
