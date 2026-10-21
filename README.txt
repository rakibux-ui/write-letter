INTERNATIONAL LETTER DAY — LETTER TO ME
=========================================

This is a 3-page static website:

1. Welcome page
2. Write-a-letter page
3. Letter-sent success page

FILES
-----
index.html
style.css
script.js

EMAIL SETUP
-----------

The form uses Formspree.

1. Create a Formspree form.
2. Set the email address where you want to receive letters.
3. Copy your Formspree endpoint.
4. Open index.html.
5. Find:

   https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT

6. Replace YOUR_FORMSPREE_ENDPOINT with your real endpoint.

Example:

   https://formspree.io/f/abcdwxyz

7. Save the file.
8. Upload all three files to Netlify.

IMPORTANT
---------
Do not put your Gmail password, SMTP password, or private API keys
inside HTML or JavaScript.

CUSTOMIZATION
-------------
In index.html you can change:
- Rakib / your name if you want it mentioned
- The page wording
- Date/heading
- Placeholder text
- Button text

The person visiting the website does NOT see a letter written by you.
They simply write their own letter/message and submit it to your email.
