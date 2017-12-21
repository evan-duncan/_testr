const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

module.exports = (router) => {
  router.get('/', index);
}

/**
 * Return an object that describes the entire API
 */
function index(req, res, next) {
  fs.readFile(path.join(__dirname, '../../swagger.yaml'), 'utf-8', (err, data) => {
    if (err) {
      return next(err);
    }

    const api = yaml.safeLoad(path.normalize(data), 'utf-8');
    const scheme = api.schemes.find(s => s === 'https') || 'http';
    const uri = `${scheme}://${api.host}${api.basePath}`;
    const json = {};
    Object.keys(api.paths)
      .forEach((resource) => {
        const p = api.paths[resource];
        const params = (p.parameters || []);
        Object.keys(p)
          .forEach((k) => {
            if (['get', 'put', 'post', 'delete'].includes(k)) {
              (p[k].parameters || []).forEach(v => params.push(v));
            }
          });

        const qs = {
          required: params
            .map((rp) => {
              if (rp.required && rp.in === 'query') {
                return rp.name;
              }
              return false;
            })
            .filter(Boolean),
          optional: params
            .map((op) => {
              if (!op.required && op.in === 'query') {
                return op.name;
              }
              return false;
            })
            .filter(Boolean),
        };

        let formattedQs = '';
        let questionMarkUsed = false;
        let ampersandUsed = false;
        if (qs.required.length) {
          formattedQs += qs.required
            .map((v, idx) => {
              if (!questionMarkUsed && idx === 0) {
                questionMarkUsed = true;
                return `?${v}`;
              }

              if (!ampersandUsed) {
                ampersandUsed = true;
                return `&${v}`;
              }

              return v;
            })
            .join(',');
          ampersandUsed = false;
        }

        if (qs.optional.length) {
          formattedQs += `{${qs.optional
            .map((v, idx) => {
              if (!questionMarkUsed && idx === 0) {
                questionMarkUsed = true;
                return `?${v}`;
              }

              if (!ampersandUsed) {
                ampersandUsed = true;
                return `&${v}`;
              }

              return v;
            })
            .join(',')
          }}`;
        }

        json[p.description] = uri + resource + formattedQs;
      });

    return res.json(json);
  });
}
