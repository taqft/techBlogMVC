const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init(
    
    {
        // id: {
        //     type: DataTypes.UUID,
        //     defaultValue: UUIDV4,
        //     primaryKey: true,
        // },
        // username: {
        //     type: DataTypes.String,
        //     allowNull: false,
        // },
        // email: {
        //     type: DataTypes.String,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         isEmail: true,
        //     }
        // },
        // password: {
        //     type:DataTypes.String,
        //     allowNull: false,
        //     validate: {
        //         len: [6]
        //     }
        // }
        }, {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            modelName: 'user'
        });

module.exports = User;