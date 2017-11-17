module.exports = function(sequelize, DataTypes) {

    var BlogPost = sequelize.define("BlogPost", {
        adminID: {
            type: DataTypes.STRING
        },
        postTitle: {
            type: DataTypes.STRING
        },      
        postString: {
            type: DataTypes.STRING
        }
       
    });

    // Associations
    // BlogPost.associate = function(models) {
    //     // associates BlogPost with Purchase

    //     BlogPost.belongsTo(models.Admin, {
    //         // onDelete: "cascade"
    //     });
    // }

    return BlogPost;

};