module.exports = function(sequelize, DataTypes) {

    var Tea = sequelize.define("Tea", {
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        teaTypes: {
            type: DataTypes.STRING
        }
       
    });

    // Associations
    // Tea.associate = function(models) {
   
    // }

    return Tea;

};