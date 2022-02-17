# JSON-API

This is a API collection for personal use only.

## Documentation

[https://my-json-server.typicode.com/arifpro/json-api](https://my-json-server.typicode.com/arifpro/json-api)

## All API list

- all: [https://my-json-server.typicode.com/arifpro/json-api/db](https://my-json-server.typicode.com/arifpro/json-api/db)
- posts: [https://my-json-server.typicode.com/arifpro/json-api/posts](https://my-json-server.typicode.com/arifpro/json-api/posts)
- comments: [https://my-json-server.typicode.com/arifpro/json-api/comments](https://my-json-server.typicode.com/arifpro/json-api/comments)
- profile: [https://my-json-server.typicode.com/arifpro/json-api/profile](https://my-json-server.typicode.com/arifpro/json-api/profile)

## Fetching data

  ```js
  // GET -> all data
  fetch(`https://my-json-server.typicode.com/arifpro/json-api/posts`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  
  // GET -> single data by passing id
  const id = 1;
  fetch(`https://my-json-server.typicode.com/arifpro/json-api/posts/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  ```

  ```js
  // POST -> create data
  fetch('https://my-json-server.typicode.com/arifpro/json-api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  ```

  ```js
  // PUT -> update data by passing updated data
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  ```

  ```js
  // PATCH -> update data by passing specific fields
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  ```

  ```js
  // DELETE -> delete data by passing id
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
  ```

## Example with all APIs

- **Live link:** [https://2irvdv.csb.app](https://2irvdv.csb.app)
- **Code (codesandbox):** [https://codesandbox.io/s/2irvdv](https://codesandbox.io/s/2irvdv)
- **Code (github):** [https://github.com/arifpro/json-api/tree/main/react-client](./react-client)
