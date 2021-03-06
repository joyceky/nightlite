'use strict';
//TODO create comments table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
    table.integer('observation_id').references('observations.id').notNullable().onDelete('CASCADE');
    table.text('comment').notNullable().defaultTo('');
    table.integer('stars').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');

};
