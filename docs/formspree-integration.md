# Formspree enquiry delivery

The Koupoli enquiry form uses the Formspree endpoint `https://formspree.io/f/xgaokqng`.

- Form name: Koupoli website enquiries
- Hosting model: static GitHub Pages site with client-side Formspree submission
- Delivery: Formspree sends approved submissions to the linked Koupoli inbox
- Bot protection: a hidden `_gotcha` honeypot field is included in the form
- User experience: the site presents inline success and error states in English and Croatian without exposing the inbox address

## Sources

- Formspree JavaScript submission guide: https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax
- Formspree spam prevention guidance: https://help.formspree.io/articles/troubleshooting/how-to-prevent-spam
