const express = require("express");

//import database
const projectDb = require("../data/helpers/projectModel");
const actionDb = require ("../data/helpers/actionModel");

//import middleware
const validateProjectId = require("../middleware/validateProjectID");

const router = express.Router();

//get all projects
router.get("/", (req, res) => {
    projectDb
    .get()
    .then(projects => {
        res.status(200).json(projects);
    }).catch(err => {
        res.status(500).json({ error: "Project could not be retrieved." });
    });
});

//get project by id
router.get("/id", validateProjectId, (req, res) => {
    const id = req.params.id;
    projectDb
    .get(id)
    .then(project => {
        res.status(200).json(project);
    }).catch(err => {
        res.status(500).json({ error: "Error retreiving project" });
    });
});

// get project actions by project id
router.get("/:id/actions", validateProjectId, (req, res) => {
    const projectId = req.params.id;
    projectDb
    .getProjectActions(projectId)
    .then(actions => {
        if (!actions.length) {
            res.status(404).json({ message: "No actions from thus project." });
        }
    }).catch(err => {
        res.status(500).json({ error: "Error retrieving posts" });
    });
});

module.exports = router;