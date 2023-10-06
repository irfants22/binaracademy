"use strict";

/** @type {import('sequelize-cli').Migration} */
const crypto = require("crypto");
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cars", [
      {
        id: crypto.randomUUID(),
        name: "BMW",
        image: "./images/car01.min.jpg",
        type: "small",
        rentPerDay: 200000,
        capacity: 2,
        description:
          "Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
        availableAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Cars", null, {});
  },
};
