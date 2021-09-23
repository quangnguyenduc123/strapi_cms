
exports.up = function (knex) {
    return knex.schema.table('todos', table => {
        table.dropColumn('new');
    })
};

exports.down = function (knex) {
    return knex.schema.table('todos', table => {
        table.string('new', 128);
    })
};
