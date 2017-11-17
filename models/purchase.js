module.exports = function(sequelize, DataTypes) {

    var Purchase = sequelize.define("Purchase", {
        // userID: {
        //     type: DataTypes.STRING
        // },
        product: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        }
       
    });

    // Associations
    // Purchase.associate = function(models) {
    //     // associates Purchase with User

    // }

    return Purchase;

};