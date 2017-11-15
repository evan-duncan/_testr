
exports.up = function(knex, Promise) {
    const ONE_HOUR = 3600;
    return knex.schema.alterTable('tokens', t => {
        t.enu('type', ['access', 'refresh']).notNullable();
        t.timestamp('expires_at').nullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('tokens', t => {
        t.dropColumn('type');
        t.dropColumn('expires_at');
    });
};

