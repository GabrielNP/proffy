import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

/* Http Methods:
 *  GET, POST, DELETE, PUT
 *
 * Params:
 *  Request body: data to create/update a registry; used in POST; Ex: { name: "Gabriel", age: 24 }
 *  Route Params: identify resource I want to update/delete; used on PUT/DELETE; Ex: /users/:id
 *  Query Params: identify or determine some parameters I want to get; used on GET; Ex: /users?page=2&sort=name
 */

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes;