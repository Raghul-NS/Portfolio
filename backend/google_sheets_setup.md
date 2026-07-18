# Google Sheets Backend Integration Guide

Follow these steps to connect your portfolio contact form to Google Sheets using Google Apps Script.

---

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and click **Blank spreadsheet**.
2. Rename the sheet in the top left from *Untitled spreadsheet* to `Portfolio Contact Submissions`.
3. **Note:** You do **NOT** need to create any sheets or column headers manually. The script will automatically create a tab named `"Let's Talk"` and build the styled headers on the very first submission!

---

## Step 2: Open Google Apps Script Editor
1. In the top toolbar of your Google Sheet, click **Extensions** $\rightarrow$ **Apps Script**.
2. This opens the Apps Script editor in a new browser tab.
3. Click the rename project field at the top (currently *Untitled project*) and change it to `Portfolio Contact Logger`.

---

## Step 3: Paste the Script Code
1. Erase any default boilerplate code in the editor (like `function myFunction() {}`).
2. Open the [google-apps-script.js](file:///e:/Project%20Folders/Portfolio/portfolio/backend/google-apps-script.js) file from your backend folder.
3. Copy the entire file contents and paste it directly into the script editor.
4. Press `Ctrl + S` (or click the **Save** disk icon) to save.

---

## Step 4: Deploy as a Web App
1. In the top-right corner, click **Deploy** $\rightarrow$ **New deployment**.
2. Click the gear icon (**Select type**) next to Configuration and choose **Web app**.
3. Configure the deployment settings:
   * **Description:** `Portfolio Contact Form Integration`
   * **Execute as:** `Me (your-google-account@gmail.com)`
   * **Who has access:** **Anyone** (This is required so the Node.js backend can forward submissions)
4. Click **Deploy**.
5. Click **Authorize access** to give the script permission to edit your spreadsheet:
   * Select your Google Account.
   * Click **Advanced** (on the Google warning screen).
   * Click **Go to Portfolio Contact Logger (unsafe)**.
   * Click **Allow**.
6. Once deployed, copy the **Web app URL** provided in the success window (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

## Step 5: Configure your `.env` File
1. Open the `.env` file in the project's root folder.
2. Replace the placeholder value with your copied URL:
   ```env
   GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```
3. Save and close the `.env` file.

---

## Step 6: Install Backend Dependencies & Run
1. Open your terminal in the `backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```
   Or run with file-watching in development mode:
   ```bash
   npm run dev
   ```
   The backend server will run on port `5000` (loaded from `.env` or defaulting).
