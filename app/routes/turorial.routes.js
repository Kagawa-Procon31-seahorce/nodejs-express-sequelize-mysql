module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  router.get("/", tutorials.brouse);

  // Retrieve all Tutorials
  router.get("/user", tutorials.findAllByUser);
  router.get("/port", tutorials.findAllByPort);
  router.get("/time", tutorials.findAllByTime);
  router.get("/date", tutorials.findAllByDate);
  router.get("/allocation", tutorials.findByAllocation);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/id/:id", tutorials.findById);

  // Update a Tutorial with id
  router.put("/id/:id", tutorials.updateById);
  router.put("/allocation/:allocation_code", tutorials.updateByAllocation);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);
};
