const UserModel = require('../../models/user.model');
const HistoryModel = require('../../models/history.model');
const UserService = require('../../services/user.services');
const userModel = require('../../models/user.model');

module.exports = class Seeding {
  constructor(router, routeVersion) {
    this.path = `/${routeVersion}`;
    this.router = router;
    this.router.post(`${this.path}/seeding`, this.start);
    this.users = [];
  }


  seedUsers = async () => {
    const userSeeding = require('../../../config/seeding-data/users.seeding.json')
    this.users = await UserModel.insertMany(userSeeding);
  }

  seedHistory = async () => {
    const historySeeding = require('../../../config/seeding-data/history.seeding.json')
    var usersRequests = [];
    var userRequest = {};
    this.users.forEach(user => {
      const requestsQty = Math.floor(Math.random() * 10) + 1;

      for (let r = 0; r < requestsQty; r++) {
        var request = Math.floor(Math.random() * 4);
        console.log(user.id)
        userRequest = {...historySeeding[request]}

        userRequest.userId = user._id;

        //console.log(userRequest);

        usersRequests.push(userRequest);
      }
    });
    await HistoryModel.insertMany(usersRequests);
    return usersRequests
  }

  start = async (req, res, next) => {
    await HistoryModel.deleteMany({});
    await userModel.deleteMany({});
    await this.seedUsers();
    const result = await this.seedHistory();
    return res.status(201).send({message : 'Seeding process done successfully.', result});
  }
}