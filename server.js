const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://umerfarooq:umer@tpc19@127.0.0.1:5432/database_1') // Example for postgres

class User extends Model { }
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
    let myUser = await User.schema('zeeyarah').sync()

    let buildAtrip = await User.schema('buildatrip').sync()
    // let data = await User.findAll();
    // console.log(data)
    console.log(await myUser.findAll())
    console.log(await buildAtrip.findAll())
    //   await sequelize.sync({force:true});
    //   const jane = await myUser.create({
    //     username: 'zeeyarah',
    //     birthday: new Date(1980, 6, 20)
    //   });
    //   console.log(jane.toJSON());
})();

