# JSON-API

This is a API collection for personal use only.

## Documentation

[https://my-json-server.typicode.com/arifpro/json-api](https://my-json-server.typicode.com/arifpro/json-api)

## Fetch Data

```js
fetch(`https://my-json-server.typicode.com/arifpro/json-api/posts`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
