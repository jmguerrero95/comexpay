const { v4: uuid } = require("uuid");
const User = require("../database/User");
const createNewUser = (newUser) => {
    console.log(newUser)


    const userToInsert = {
      ...newUser,
      createdAt: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
      phoneCode: 0000
    };
    console.log(userToInsert)
    try {
      const createdUser = User.createNewUser(userToInsert);
      console.log(createdUser)
      return createdUser;
    } catch (error) {
      throw error;
    }
};

module.exports = {
    createNewUser,
  };
