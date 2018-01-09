const auth = require('../middlewares/auth');
const Project = require('../models/project');
const Owner = require('../models/owner');
const envelope = require('../../lib/envelope');
const HttpStatus = require('../../lib/httpstatus');
const uniq = require('lodash.uniq');

module.exports = (router) => {
    router.get('/projects', auth.bearer, index);
    router.post('/projects', auth.bearer, create);
    router.get('/projects/:name', auth.bearer, show);
};

async function index(req, res, next) {
    try {
        const owners = await Owner.query().where('user_id', '=', req.user.id);
        const ownerIds = uniq(owners.map(owner => owner.id));
        const projects = await Project.query().where('owner_id', 'in', ownerIds)
        const status = HttpStatus.OK;
        res.status(status).json(envelope(status, 'OK', projects));
    } catch (err) {
        next(err);
    }
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

async function show(req, res, next) {
    try {
        const project = await Project.query().where('name', '=', decodeURIComponent(req.params.name)).first();
        const owner = await project.$relatedQuery('owner').where('user_id', '=', req.user.id);
        let status, data = {};
        if (owner) {
            status = HttpStatus.OK
            res.status(status).json(envelope(status, 'OK', project.toJSON()));
        } else {
            status = HttpStatus.NOT_FOUND;
            res.status(status).json(envelope(status, 'Not Found', {}));
        }
    } catch (err) {
        next(err);
    }
}
