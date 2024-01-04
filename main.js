Array.fromAsync(
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json)),

  fetch("https://fakestoreapi.com/users")
    .then(response => response.json())
    .then(json => console.log(json)),

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => console.log(json)),

  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(json => console.log(json))
).then(array => console.log(array))
