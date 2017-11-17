// export player sequelizer
module.exports = function(sequelize, DataType) {
    var Eventdate = sequelize.define("Eventdate", {
        title: {
            type: DataType.STRING
        },
        start: {
            type: DataType.DATEONLY,
            isDate: true
        }
    });

   
    return Eventdate;
};




