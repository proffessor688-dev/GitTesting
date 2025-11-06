fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((rawdata) => {
    console.log("user Data", rawdata);
  })
  .catch((error) => {
    console.error(error);
  });