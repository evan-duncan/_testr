const auth = require('../middlewares/auth');

module.exports = (router) => {
    router.get('/projects', auth.bearer, index);
    router.post('/projects', auth.bearer, create);
};

function index(req, res, next) {

}

function create(req, res, next) {

}
