module.exports = function(sequelize, DataTypes) {

    var Type = sequelize.define("Type", {
        typeName: {
            type: DataTypes.STRING
        }       
       
    });

    Type.associate = function(models) {
        

        Type.belongsToMany(models.Tea, {
            through: "allTeas",
            onDelete: "cascade"
        });

    }

    return Type;

};