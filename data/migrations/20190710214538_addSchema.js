exports.up = async function(knex) {
  await knex.schema.dropTableIfExists("potluck_planner");
  await knex.schema.createTable("users", tbl => {
    tbl.increments("id");

    tbl.string("firstName").notNullable();
    tbl.string("lastName").notNullable();
    tbl
      .string("email")
      .unique()
      .notNullable();
    tbl
      .string("password")
      .notNullable();
  });

  await knex.schema.createTable("potlucks", tbl => {
    tbl.increments("id");
    tbl.string("locationName").notNullable();
    tbl.integer("locationAddress").notNullable();
    tbl.string("locationStreet").notNullable();
    tbl.string("locationUnit");
    tbl.string("locationState").notNullable();
    tbl.string("locationCity").notNullable();
    tbl.string("locationCountry").notNullable();
    tbl.string("locationPostcode").notNullable();
  });

  await knex.schema.createTable("usersPotlucks", tbl => {
    tbl.increments("id");
    tbl.integer("userId").notNullable();
    tbl.integer("potluckId").notNullable();
    tbl.integer("role").notNullable();
    tbl.integer("attendance");
    tbl
      .foreign("potluckId")
      .references("id")
      .inTable("potlucks");
  });

  await knex.schema.createTable("potluckItems", tbl => {
    tbl.increments("id");
    tbl.integer("potluckItemsUserId").notNullable();
    tbl.integer("potluckItemsPotluckId").notNullable();
    tbl.string("foodName").notNullable();
    tbl.integer("servings").notNullable();
    tbl
      .foreign("potluckItemsUserId")
      .references("id")
      .inTable("users");
    tbl
      .foreign("potluckItemsPotluckId")
      .references("id")
      .inTable("potlucks");
  });
  await knex.schema.createTable("potluckRequirements", tbl => {
    tbl.increments("id");
    tbl.integer("potluckRequirementsId").notNullable();
    tbl.string("foodType").notNullable();
    tbl.integer("servings").notNullable();
    tbl
      .foreign("potluckRequirementsId")
      .references("id")
      .inTable("potlucks");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("usersPotlucks");
  await knex.schema.dropTableIfExists("potlucks");
  await knex.schema.dropTableIfExists("potluckItems");
  await knex.schema.dropTableIfExists("potluckRequirements");
};
