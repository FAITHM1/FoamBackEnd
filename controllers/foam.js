const express = require("express");
const Foam = require("../models/foamModel");

const router = express.Router();

router.get("/seed", (req, res) => {
  const newFoam = require("../seed2");
  Foam.deleteMany({}).then((data) => {
    Foam.create(newFoam).then((data) => {
      res.json(data);
    });
  });
});
//View route

router.get("/", async (req, res) => {
  try {
    res.json(await Foam.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});
//update route
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Foam.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
