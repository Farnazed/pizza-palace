# Pizza Palace

sql commands to run :

sqlite3 -init tables.sql ../pizzaPalace.db

.quit

node addSampleData.js

## LOCAL DEPLOYMENT INSTRUCTIONS:

1. `cmd: npm install`
2. `cmd: npm run dev`

(If you don't have nodemon, then use this command in and try again: npm -g install nodemon)

Rename secretExample.js as secret.js, and enter the api key details.

Rename serviceAccountKeyExample.js as serviceAccountKey.js, and provide Firebase admin key details.

## Testing:

To run the testing suite:

`cmd: npm run test`

This project has a custom Jest testing environment setup that works alongside in-memory MongoDB with Supertest enabling assertion checks against the http requests.

By default, --watchAll is enabled which will keep the testing suite enabeled until you manually close the process in the command line.

Including a --coverage tag will generate a test coverage report.

Look at [writing test cases](https://gitlab.com/advertiise/intcia-api/-/issues/12#note_401300500) issue on gitlab project for more details.
