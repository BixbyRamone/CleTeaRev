module.exports = function(sequelize, DataTypes) {

    var Tea = sequelize.define("Tea", {
        name: {
            type: DataTypes.STRING
        },
        priceCup: {
            type: DataTypes.FLOAT
        },
        pricePot: {
            type: DataTypes.FLOAT
        },
        priceOz: {
            type: DataTypes.FLOAT
        },
        description: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        teaTypes: {
            type: DataTypes.STRING
        },
        available: {
            type: DataTypes.BOOLEAN
        },
        imageLink1: {
            type: DataTypes.STRING
        },
        imageLink2: {
            type: DataTypes.STRING
        }
       
    });

    // Associations
    Tea.associate = function(models) {
        Tea.hasMany(models.Type, {
            onDelete: "cascade"
        });
    }

    return Tea;

};