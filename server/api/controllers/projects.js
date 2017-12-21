const auth = require('../middlewares/auth');
const Project = require('../models/project');
const envelope = require('../../lib/envelope');
const HttpStatus = require('../../lib/httpstatus');

module.exports = (router) => {
    router.get('/projects', auth.bearer, index);
    router.post('/projects', auth.bearer, create);
};

function index(req, res, next) {
    Project.query()
        .where('owner_id', '=', req.user.id)
        .then((projects) => {
            const status = HttpStatus.OK;
            const data = envelope(status, 'OK', projects);
            res.status(status).json(data);
        })
        .catch(next);
}

function create(req, res, next) {

    Project.create({ ...req.body, user: req.user })
        .then((project) => {
            const status = HttpStatus.OK;
            const data = envelope(status, 'OK', project.toJSON());
            res.status(status).json(data);
        })
        .catch(next);
}
