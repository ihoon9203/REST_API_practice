## Installation
0. install node.js from https://nodejs.org/en/download/
1. npm install express -> install express.js
1. npm install -> to add all dependency
2. node index.js -> start localhost server: http://localhost:3001/



## REST API Endpoint
### GET
/all: return all people
### POST
/add: add a new person to document

## Document Example
{
    "people": [
        {
            "_id": "63159bad5ce4164285e5f129",
            "id": 1,
            "name": "James Bond",
            "number": "21345"
        },
        {
            "_id": "63159bad5ce4164285e5f12a",
            "id": 2,
            "name": "Benedict Cumberbatch",
            "number": "42312454"
        },
        {
            "_id": "63159ce42b0a297a8516d31e",
            "name": "Conan Doyle",
            "number": "412345656",
            "id": 44
        },
        {
            "_id": "63159d022b0a297a8516d31f",
            "name": "Jane Doe",
            "number": "6868854",
            "id": 42
        },
        {
            "_id": "63159d522b0a297a8516d320",
            "name": "John Doe",
            "number": "682222",
            "id": 38
        }
    ]
}
