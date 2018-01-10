module.exports = function(sequelize, DataTypes) {

    var SearchTerm = sequelize.define("SearchTerm", {
        
        term: {
            type: DataTypes.STRING,
            allownull: false
        }
       
    });   

    return SearchTerm;

};