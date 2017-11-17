module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
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
        state: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.STRING
        },
        billingAddress: {
            type: DataTypes.STRING
        },
        billingState: {
            type: DataTypes.STRING
        },
        billingZip: {
            type: DataTypes.STRING
        }
       
    });

    // Associations
    User.associate = function(models) {
        // associates User with Purchase

        User.hasMany(models.Purchase, {
            // onDelete: "cascade"
        });
    }

    return User;

};