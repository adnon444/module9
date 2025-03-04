// "use strict";
// const { Sequelize } = require("sequelize");

// //Sequelize is a package that abstracts out the need to write SQL queries,
// //relying instead on their models to do it for you
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//   }
// );

// const connectMysql = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log(
//       `Successful connection to MySQL Database ${process.env.DB_NAME}`
//     );
//   } catch (error) {
//     console.error("Unable to connect to MySQL database:", error);
//     process.exit(1);
//   }
// };

// connectMysql();

// module.exports = {
//   Sequelize: sequelize,
//   connectMysql,
// };




// "use strict";
// const { Sequelize } = require("sequelize");

// // Sequelize is a package that abstracts out the need to write SQL queries,
// // relying instead on their models to do it for you

// const sequelize = new Sequelize(
//   process.env.DB_NAME,      // Database name from environment variables
//   process.env.DB_USER,      // Database user from environment variables
//   process.env.DB_PASSWORD,  // Database password from environment variables
//   {
//     host: process.env.DB_HOST,  // Host from environment variables
//     dialect: "mysql"            // Using MySQL dialect
//   }
// );

// const connectMysql = async () => {
//   try {
//     await sequelize.authenticate();  // Attempt to authenticate with the database
//     console.log(`Successfully connected to MySQL Database: ${process.env.DB_NAME}`);
//   } catch (error) {
//     console.error("Unable to connect to MySQL database:", error);
//     process.exit(1);  // Exit the process if the connection fails
//   }
// };

// // Call the function to establish the connection when the module is loaded
// connectMysql();

// module.exports = {
//   Sequelize: sequelize,
//   connectMysql,
// };



"use strict";
const { Sequelize } = require("sequelize");

// Sequelize is a package that abstracts out the need to write SQL queries,
// relying instead on their models to do it for you

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database name from environment variables
  process.env.DB_USER,      // Database user from environment variables
  process.env.DB_PASSWORD,  // Database password from environment variables
  {
    host: process.env.DB_HOST,    // Host from environment variables
    port: process.env.DB_PORT,    // Port from environment variables (3307)
    dialect: "mysql",             // Using MySQL dialect
  }
);

const connectMysql = async () => {
  try {
    await sequelize.authenticate();  // Attempt to authenticate with the database
    console.log(`Successfully connected to MySQL Database: ${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Unable to connect to MySQL database:", error);
    process.exit(1);  // Exit the process if the connection fails
  }
};

// Call the function to establish the connection when the module is loaded
connectMysql();

module.exports = {
  Sequelize: sequelize,
  connectMysql,
};