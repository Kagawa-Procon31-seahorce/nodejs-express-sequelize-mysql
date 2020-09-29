const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // 1つでも空白が許されないパラメータ
  if (!(req.body.user_id&&req.body.to_port_code&&req.body.from_port_code&&req.body.reservations_number&&req.body.departure_date&&(req.body.departure_time||req.body.arrival_time))) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  // id, createAt, updateAtは除外
  const tutorial = {
    user_id: req.body.user_id,
    to_port_code: req.body.to_port_code,
    from_port_code: req.body.from_port_code,
    allow_share_ride: req.body.allow_share_ride ? req.body.allow_share_ride : false,
    reservations_number: req.body.reservations_number,
    departure_date: req.body.departure_date,
    departure_time: req.body.departure_time ? req.body.departure_time : null,
    arrival_time: req.body.arrival_time ? req.body.arrival_time : null,
    reservation_status: 0,
    price: null,
    allocation_code: null,
    cancel_status: 0,
    captain_code: null,
    boat_code: null,
    taxi_company_code: null
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.brouse = (req, res) => {
  Tutorial.findAll({ where: "" })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}

// Retrieve all Tutorials from the database.
exports.findAllByUser = (req, res) => {
  const user_id = req.query.user_id;
  var condition = user_id ? { user_id: { [Op.like]: `%${user_id}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAllByPort = (req, res) => {
  const from_port_code = req.query.from_port_code;
  var condition = from_port_code ? { from_port_code: { [Op.like]: `%${from_port_code}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAllByTime = (req, res) => {
  const departure_time = req.query.departure_time;
  var condition = departure_time ? { departure_time: { [Op.like]: `%${departure_time}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAllByDate = (req, res) => {
  const departure_date = req.query.departure_date;
  var condition = departure_date ? { departure_date: { [Op.like]: `%${departure_date}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findByAllocation = (req, res) => {
  const allocation_code = req.params.allocation_code;

  Tutorial.findByPk(allocation_code)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.updateAllocation = (req, res) => {
  const allocation_code = req.params.allocation_code;

  Tutorial.update(req.body, {
    where: { allocation_code: allocation_code }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
/* exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}; */
