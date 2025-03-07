import { DataTypes } from "sequelize";
import sequelize from "../../configs/database.js";

const GroupMembers = sequelize.define(
  "GroupMembers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    joined_at: {
      type: DataTypes.DATE,
      values: DataTypes.NOW,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "group_members",
    timestamps: true,
  }
);
export default GroupMembers;
