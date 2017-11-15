const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const file = process.argv[2];
if (!file || !process.argv[3]) {
    console.log(`Usage: ${path.basename(__filename)} /path/to/swagger.yaml /path/to/output.json`);
    process.exit(1);
}

fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    const js = yaml.safeLoad(path.normalize(data), 'utf-8');
    fs.writeFile(path.normalize(process.argv[3]), JSON.stringify(js, null, '  '), err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log('done');
    });
});

