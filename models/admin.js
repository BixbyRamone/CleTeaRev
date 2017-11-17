module.exports = function(sequelize, DataTypes) {

    var Admin = sequelize.define("Admin", {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [6, 12]
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1],
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        mainAdmin: {
            type: DataTypes.BOOLEAN
        }
       
    });

    // Associations
   

    return Admin;

};