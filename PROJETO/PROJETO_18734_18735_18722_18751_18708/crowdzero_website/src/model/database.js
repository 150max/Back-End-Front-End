var Sequelize = require('sequelize');
const sequelize = new Sequelize(

'd13hj0orgjd09r',
'jcvokgrbeancvz',
'c6acc9403803bd0da609dea05cfce2da9c7737403d9304a85d953c3f706466e4',
{
host: 'ec2-63-33-239-176.eu-west-1.compute.amazonaws.com',
port: '5432',
dialect: 'postgres',
dialectOptions: {
    ssl: {
    rejectUnauthorized: false
    }
    }
}
);
module.exports = sequelize;
