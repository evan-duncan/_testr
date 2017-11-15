const HttpStatus = require('../../lib/httpstatus');
const { User } = require('../models');
const envelope = require('../../lib/envelope');

module.exports = {
    create: function create(req, res, next) {
        User.confirmPasswordAndCreate(req.body)
            .then(user => {
                const status = HttpStatus.OK;
                const data = envelope(status, 'OK', user.toJSON());
                res.status(status).json(data);
            })
            .catch(next);
    },
    show: function show(req, res) {
        const status = HttpStatus.OK;
        const data = envelope(status, 'OK', { ...req.user.toJSON(), ...req.authInfo });
        res.json(data);
    }
};

