
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', t => {
        t.dropColumn('username');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', t => {
        t.string('username', 100).unique();
    });
};
