
exports.up = function (knex, Promise) {
  return knex.schema.createTable('payment_plans', (t) => {
    t.increments();
    t.enu('name', ['basic', 'pro', 'enterprise']).notNullable().index();
    t.string('descriptor', 22);
    t.integer('amount').unsigned().notNullable();
    t.enu('currency', [
      'usd', 'aed', 'lkr', 'lrd',
      'afn', 'all', 'lsl', 'mad',
      'amd', 'ang', 'mdl', 'mga',
      'aoa', 'ars', 'mkd', 'mmk',
      'aud', 'awg', 'mnt', 'mop',
      'azn', 'bam', 'mro', 'mur',
      'bbd', 'bdt', 'mvr', 'mwk',
      'bgn', 'bif', 'mxn', 'myr',
      'bmd', 'bnd', 'mzn', 'nad',
      'bob', 'brl', 'ngn', 'nio',
      'bsd', 'bwp', 'nok', 'npr',
      'bzd', 'cad', 'nzd', 'pab',
      'cdf', 'chf', 'pen', 'pgk',
      'clp', 'cny', 'php', 'pkr',
      'cop', 'crc', 'pln', 'pyg',
      'cve', 'czk', 'qar', 'ron',
      'djf', 'dkk', 'rsd', 'rub',
      'dop', 'dzd', 'rwf', 'sar',
      'egp', 'etb', 'sbd', 'scr',
      'eur', 'fjd', 'sek', 'sgd',
      'fkp', 'gbp', 'shp', 'sll',
      'gel', 'gip', 'sos', 'srd',
      'gmd', 'gnf', 'std', 'svc',
      'gtq', 'gyd', 'szl', 'thb',
      'hkd', 'hnl', 'tjs', 'top',
      'hrk', 'htg', 'try', 'ttd',
      'huf', 'idr', 'twd', 'tzs',
      'ils', 'inr', 'uah', 'ugx',
      'isk', 'jmd', 'uyu', 'uzs',
      'jpy', 'kes', 'vnd', 'vuv',
      'kgs', 'khr', 'wst', 'xaf',
      'kmf', 'krw', 'xcd', 'xof',
      'kyd', 'kzt', 'xpf', 'yer',
      'lak', 'lbp', 'zar', 'zmw',
    ]).notNullable().defaultTo('usd').index();
    t.enu('interval', ['month', 'year']).notNullable().defaultTo('month');
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('payment_plans');
};

