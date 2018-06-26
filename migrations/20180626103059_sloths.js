
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sloths', (table) => {
    table.increments()
    table.string('name')
    table.integer('age')
    table.text('image')
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('sloths')
}
