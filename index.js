fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("user Data", data);
  })
  .catch((error) => {
    console.error(error);
  });
