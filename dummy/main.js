let apiEndpoint = 'http://localhost:3000/users';
let objectData = [];
let allIds = [];
// Fetch data from the API endpoint 
try {
    fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        objectData = data;
        console.log('Data fetched successfully:', objectData);
        for(let i = 0; i < data.length; i++) {
            allIds.push(data[i].id);
            }
            console.log('All IDs:', allIds);
    })   
} catch (error) {
    console.error('An error occurred:', error);
    
}



