import express from 'express';

const app = express();

// Making Express understand JSON. It's necessary to read request body.
app.use(express.json());

/* Http Methods:
 *  GET, POST, DELETE, PUT
 *
 * Params:
 *  Request body: data to create/update a registry; used in POST; Ex: { name: "Gabriel", age: 24 }
 *  Route Params: identify resource I want to update/delete; used on PUT/DELETE; Ex: /users/:id
 *  Query Params: identify or determine some parameters I want to get; used on GET; Ex: /users?page=2&sort=name
 */

app.post('/users', (request, response) => {
    const users = [
        { name: "Gabriel", age: 24 },
        { name: "Gustavo", age: 23 }
    ]

    return response.json(users)
})

// Listen http requests at definied port: 3333
app.listen(3333);