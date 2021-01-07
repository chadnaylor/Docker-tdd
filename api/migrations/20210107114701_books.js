exports.up = function (knex) {
    return knex.schema.createTable('books', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('title').notNullable();
        table.string('author');
        table.integer('isbn');
        table.boolean('is_checked_out').defaultTo(false);
        table.integer('checked_out_by');
        table.date('due_date');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('books');
};
