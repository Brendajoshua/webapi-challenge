const express = require("express");

//import database
const projectDb = require("../data/helpers/projectModel");
const actionDb = require("../data/helpers/actionModel");

//import middleware
const validateProjectId = require("../middleware/validateProjectID");
const validateAction = require("../middleware/validateAction");
const validateActionId = require("../middleware/validateActionID");

const router = express.Router();

//get all actions
router.get("/", (req, res) => {
    actionDb
    .get()
    .then(actions => {
        res.status(200).json(actions);
    }).catch(err => {
        res.status(500).json({ error: "the actions could not be retieved" });
    });
});

//get action by action id
router.get("/:id", validateActionId, (req, res) => {
    const id = req.params.id;
    actionDb
    .get(id)
    .then(action => {
        res.status(200).json(action);
    }).catch(err => {
        res.status(500).json({ error: "Error retrieving action" });
    });
});

//delete action by id
router.delete("/:id", validateActionId, (req, res) => {
    const id = req.params.id;
    actionDb
      .remove(id)
      .then(action => {
        res.status(200).json(id);
      }).catch(err => {
        res.status(500).json({ error: "Error removing action" });
      });
  });
  
  // update action by action id
  router.put("/:id", validateActionId, validateAction, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    actionDb
      .update(id, changes)
      .then(action => {
        res.status(200).json(action);
      }).catch(err => {
        res.status(500).json({ error: "Error updating action." });
      });
  });
  
  // post action by action id and project id
  router.post("/", validateProjectId, validateAction, (req, res) => {
    const newAction = req.body;
    if (!newAction.project_id) {
      res.status(400).json({ message: "Please provide project id." });
    } else {
      actionDb
        .insert(newAction)
        .then(action => {
          res.status(201).json(action);
        }).catch(err => {
          res.status(500).json({ error:"There was an error while saving the action to the database." });
        });
    }
  });

module.exports = router;