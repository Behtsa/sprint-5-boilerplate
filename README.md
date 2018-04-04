## Consuming Dark Sky Api with Library Request

** Command use:
- ./node_modules/.bin/browserify js/main.js -o bundle.js

Use Browserify due to _'require is not defined'_ **error**.
This because **require** runs with Node.js on the _server-side_ and Browserify helped us to do it on the _client-side_ in the browser. 
