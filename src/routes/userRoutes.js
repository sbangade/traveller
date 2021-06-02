import { addUserRequest,
    getDrivers
} from '../controller/userController';

const routes = (app) => {

    app.route('/user')
    .post(addUserRequest);

    app.route('/user')
    .get(getDrivers);
}

export default routes;