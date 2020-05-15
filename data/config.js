const knex = require("knex")
const knexfile = require("../knexfile")

// 13) pass the environment to knexfile ( g2 packagejsonNotes )
// module.exports = knex(knexfile.testing) // or knex( knexfile.development )
// 14) update module.exports for cross-env
module.exports = knex(knexfile[ process.env.NODE_ENV ])