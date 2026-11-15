# Ilefoastro Web site: setup

The site ships with `noindex` and a blocking robots.txt. Nothing is searchable until you approve it.

1. GitHub: open the repo `ilefoastro/Ilefoastro-Web`. Add file, Upload files, upload everything in this folder (keep `admin`, `content`, `images` folders).
2. Cloudflare: dash.cloudflare.com, Workers & Pages, Create, Pages, Connect to Git, pick `Ilefoastro-Web`. Framework None, build command empty, output directory `/`. Deploy. Your address is `https://<name>.pages.dev`.
3. WhatsApp: edit `app.js`, set `WHATSAPP_NUMBER` (international format, no plus, e.g. 2348012345678).
4. Email form: web3forms.com, enter your email, receive the Access Key, paste it in `index.html` (REPLACE_WITH_WEB3FORMS_ACCESS_KEY).
5. Analytics: Cloudflare, Analytics, Web Analytics, add the site, copy the token, remove the comment markers around the beacon script in `index.html`, paste the token.
6. CMS: `/admin` uses Decap CMS. GitHub login needs a small free OAuth worker on Cloudflare (search "decap-proxy"); do this on a computer, then put the worker URL in `admin/config.yml` (`base_url`). Until then edit `content/portfolio.json` in GitHub.
7. Going public: remove the noindex meta in `index.html`, set robots.txt to `Allow: /`, then in Google Search Console add the site (URL prefix), verify, and submit the address.
8. Add project photos to the `images` folder and fill the `image` field in the CMS.
