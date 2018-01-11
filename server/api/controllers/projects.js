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
        const projects = await Project.query().where('name', '=', decodeURIComponent(req.params.name));
        const project = projects.find(async (project) => {
            // Different owners can have the same project name, but only 1 instance of that project.
            // To find the project that is owned by this user we need to iterate through
            // all of the projects that have the same name as the one given before we can determine
            // if one exists or not.
            if (await project.$relatedQuery('owner').where('user_id', '=', req.user.id)) {
                return project;
            }
        });

        let status, data = {};
        if (project) {
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
