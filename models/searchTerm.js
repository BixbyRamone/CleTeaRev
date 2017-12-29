module.exports = function(sequelize, DataTypes) {

    var searchTerm = sequelize.define("searchTerm", {
        
        term: {
            // timestamps: false,
            type: DataTypes.STRING
        }
       
    });   

    return searchTerm;

};