# urldecode
`urldecode` adds try-catch on `decodeURLComponent`, and return `-1` when failing.

## Usage

```js
var decode = require('urldecode')
console.log(decode('http://127.0.0.1:3333/Dropbox/appData/nvALT/Become%20Efficient%20or%20Die.md'));
// http://127.0.0.1:3333/Dropbox/appData/nvALT/Become Efficient or Die.md
```

## LICENCE

MIT LICENCE
