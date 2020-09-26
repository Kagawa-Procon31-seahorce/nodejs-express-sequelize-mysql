module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    user_id: {
      type: Sequelize.STRING
    },
    to_port_code: {
      type: Sequelize.INTEGER
    },
    from_port_code: {
      type: Sequelize.INTEGER
    },
    allow_share_ride: {
      type: Sequelize.BOOLEAN
    },
    reservations_number: {
      type: Sequelize.INTEGER
    },
    departure_date: {
      type: Sequelize.DATEONLY
    },
    departure_time: {
      type: Sequelize.TIME
    },
    arrival_time: {
      type: Sequelize.TIME
    },
    reservation_status: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    },
    allocation_code: {
      type: Sequelize.INTEGER
    },
    cancel_status: {
      type: Sequelize.BOOLEAN
    },
    captain_code: {
      type: Sequelize.INTEGER
    },
    boat_code: {
      type: Sequelize.INTEGER
    },
    taxi_company_code: {
      type: Sequelize.INTEGER
    }
  });

  return Tutorial;
};
