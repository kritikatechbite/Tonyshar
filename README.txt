
TONYSHARK STATIC WEBSITE

Files:
- index.html
- games.html
- about.html
- contact.html
- privacy.html
- terms.html
- disclaimer.html
- assets/
- review/index.html

REDIRECT LINK:
Open:
review/index.html

Change this line:

const REDIRECT_URL = "#";

to your destination URL.

Behavior:
- / or /index.html = normal TonyShark website
- /review/ = redirects every visitor to the same destination
- approved tracking parameters such as gad_campaignid, gclid, gbraid, wbraid and utm_* are preserved

For GitHub:
Extract ZIP and upload all files/folders to repository root.

For static hosting:
Point the site root at the repository root.
