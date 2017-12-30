module.exports = function(sequelize, DataTypes) {

    var SearchTerm = sequelize.define("searchTerm", {
        
        term: {
            type: DataTypes.STRING,
            allownull: false
        }
       
    });   

    return SearchTerm;

};