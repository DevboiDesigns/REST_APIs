# REST API documentation 

* working with JSON requests - application/json

# HTTP Methods 

* `GET` - get a resource from the server
* `POST` - post a resource to the server (create or append)
* `PUT` - put a resource on the server (create or overwrite)
* `PATCH` - update parts of an existing resource on the server
* `DELETE` - delete a resource 
* `OPTIONS` - determine whether follow-up/ next request is allowed (sent automatically)


# Rest Principles 

* Uniform Interface - clearly defined api endpoints with clearly defined requests + response data structure 
* Stateless Interactions - server and cliend dont store any connection history, every request is handled seperately


# Helpful dependencies 

* `express` --save
* `nodemon` --save-dev
* `body-parser` --save

# Status Codes

**setting status code is important**

* `200` - success
* `201` - success a resource was created 


# Headers

**REMEBER to set Headers**

* `Access-Control-Allow-Origin` = `*` - any client
* `Access-Control-Allow-Methods` = `GET, POST, PUT, PATCH, DELETE`  - can be whatever you use


## Client side headers

```js 
const getButton = document.getElementById('get')
const postButton = document.getElementById('post')

getButton.addEventListener('click', () => {
  fetch('http://localhost:8080/feed/posts')
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err))
})

postButton.addEventListener('click', () => {
  fetch('http://localhost:8080/feed/post', {
    method: "POST",
    body: JSON.stringify({
      title: "A Codepen Host",
      content: "Create a post via codepen"
    }), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err))
})
```
