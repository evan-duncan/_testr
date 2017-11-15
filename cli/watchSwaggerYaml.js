const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const input = path.resolve(__dirname, '..', './server/swagger.yaml');
const output = path.resolve(__dirname, '..', './server/swagger.json');
const script = path.resolve(__dirname, 'swaggerGen.js');
fs.watch(input, (event, file) => {
    exec(`node ${script} ${input} ${output}`);
});

