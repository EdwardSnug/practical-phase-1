let endPoint = 'http://localhost:3000/users/1';
try {
    fetch(endPoint)
    .then(response => response.json())
    .then(data => console.log(data))
} catch (error) {
    console.log(error);
}