module.exports = (sequelize, DataTypes) => {
    return sequelize.define("customer", {
        id:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        image:{
            type:DataTypes.STRING(1024),
        },
        name:{
            type:DataTypes.STRING(64),
        },
        birthday:{
            type:DataTypes.STRING(64),
        },
        gender:{
            type:DataTypes.STRING(64),
        },
        job:{
            type:DataTypes.STRING(64),
        },
        createDate:{
            type:DataTypes.DATE,
        },
        isDeleted:{
            type:DataTypes.INTEGER(11),
        }
    },{timestamps: false, paranoid: false});
}