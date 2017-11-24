module.exports = function(sequelize, DataTypes) {

    var Type = sequelize.define("Type", {
        term: {
            typeName: DataTypes.STRING
        },
       
       
    });

    Type.associate = function(models) {
        

        Type.hasMany(models.Tea, {
            onDelete: "cascade"
        });

    return Type;

};