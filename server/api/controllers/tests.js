const { Test } = require('../models');

module.exports = {
  index: function index(req, res, next) {
    Test
      .query()
  },
  create: function create(req, res) {
  },
  show: function show(req, res) {
  },
  update: function update(req, res) {
  },
  destroy: function destroy(req, res) {
  },
};

