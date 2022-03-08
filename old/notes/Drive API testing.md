Google Drive API testing

Finally found the right way to access the Docs API from client-side:

* https://medium.com/swlh/oauth-2-0-accessing-google-apis-from-your-client-side-js-application-cde47010c659
* https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow



https://developers.google.com/drive/api/v3/about-sdk?hl=en#what_can_you_do_with_google_drive_api
(has many links to examples)


Important tasks:

-   Make a folder just for this app
  -   Get the folder ID so we can use it later
  -   Probably also need to be able to get folder ID from folder name, because we won't be able to store that ID across sessions
-   List the files in that folder
  -   https://developers.google.com/drive/api/v3/search-files
-   Read files from that folder
  -   https://developers.google.com/drive/api/v3/manage-downloads?hl=en
-   Write files to that folder
  - https://developers.google.com/drive/api/v3/manage-uploads?hl=en
-   Delete files in that folder

Base URL: https://www.googleapis.com/drive/v3

Proper access response from
https://www.googleapis.com/drive/v3/about?fields=user
No API key required

curl \\
  'https://www.googleapis.com/drive/v3/about?fields=user' \\
  \--header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \\
  \--header 'Accept: application/json' \\
  \--compressed

{
  "user": {
    "kind": "drive#user",
    "displayName": "Colin Fredericks",
    "photoLink": "https://lh3.googleusercontent.com/a-/AOh14GgvlbE1d67Io0WGRcHnbumvJVliDKbIIgC38a41CQ=s64",
    "me": true,
    "permissionId": "11541988143967860565",
    "emailAddress": "colin.fredericks@gmail.com"
  }
}

Other fields:
