import { DataTypes } from "sequelize";
import sequelize from "../../configs/database.js";
import User from "./users.js";

const Contacts = sequelize.define(
  "Contacts",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "contacts",
    timestamps: false,
  }
);

Contacts.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Contacts.belongsTo(User, {
  foreignKey: "contact_id",
  as: "contact_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
export default Contacts;
