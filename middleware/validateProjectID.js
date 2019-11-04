const projectDb = require("../data/helpers/projectModel");

function validateProjectId(req, res, next) {
    const id = req.params.id;
    projectDb.get(id).then(project => {
        if (project) {
            project = req.project;
            next();
        } else {
            res.status(400).json({ message: "Invalid project Id" });
        }
    })
}

module.exports = validateProjectId;