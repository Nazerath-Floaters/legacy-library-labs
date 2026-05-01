# Google Apps Script setup for Legacy Library Labs

## What this does
Your GitHub Pages site submits JSON to a Google Apps Script web app.
That script writes each submission into a Google Sheet you control.

## 1. Create the sheet
Create or open the Google Sheet you want to receive submissions.
Use the first row as headers:

- Timestamp
- Email
- Phone
- Hardware
- Digitize
- Details
- Source
- User Agent
- Submitted At

## 2. Create the Apps Script
In that Google Sheet:
- Extensions -> Apps Script
- Replace the default code with the contents of `google-apps-script.js`
- Save the project

## 3. Deploy it as a web app
In Apps Script:
- Deploy -> New deployment
- Select type: Web app
- Execute as: Me
- Who has access: Anyone
- Deploy
- Authorize the script when Google asks
- Copy the Web app URL

## 4. Paste the web app URL into the site
In `src/App.jsx`, replace:

`PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`

with your deployed web app URL.

## 5. Rebuild and deploy the site
```bash
npm run build
npm run deploy
```

## Notes
- If you edit the Apps Script later, deploy a new version and update the URL if Google gives you a new one.
- This is much more reliable than hidden Google Form posting.
- Public spam protection is still minimal. If spam starts, add a hidden honeypot field and simple validation next.
