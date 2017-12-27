module.exports = function(sequelize, DataTypes) {

    var searchTerm = sequelize.define("searchTerm", {
        timestamps: false,

        term: {
            type: DataTypes.STRING
        }
       
    });

   

    return searchTerm;

};