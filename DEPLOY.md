# How to Host Your Portfolio on GitHub Pages

## 1. Prepare Your Files (Completed ✅)
We have already renamed your best version (`index-ocean.html`) to `index.html`.
- **Main Site:** `index.html` (Ocean Theme)
- **Backup:** `index-original.html` (Old Version)

## 2. Create a GitHub Repository
1. Log in to [GitHub.com](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `portfolio` (or `souvik-portfolio`).
4. Set visibility to **Public**.
5. Click **Create repository**.

## 3. Upload Your Code
There are two ways to do this:

### Option A: Upload via Browser (Easiest)
1. On your new repository page, click the link **"uploading an existing file"**.
2. Drag and drop **ALL** files from your `d:\Coding\portfolio` folder into the browser window.
   - Make sure to include the `css` and `js` folders!
3. Wait for files to upload.
4. In the "Commit changes" box, type "Initial upload".
5. Click **Commit changes**.

### Option B: Using Git (Command Line)
If you have Git installed, run these commands in your terminal:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

## 4. Activate GitHub Pages
1. Go to your repository **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Branch**:
   - Select **main** (or master).
   - Ensure folder is set to **/(root)**.
   - Click **Save**.

## 5. You're Live! 🚀
Wait about 1-2 minutes. Your site will be published at:
`https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`
