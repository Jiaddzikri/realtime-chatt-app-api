import sequelize from "../../configs/database.js";

await sequelize.sync({alter : true});

console.log('All models were synchronized successfully')