const actionDb = require("../data/helpers/actionModel");

function validateActionId(req, res, next) {
  const id = req.params.id;
  actionDb.get(id).then(action => {
    if (action) {
      action = req.action;
      next();
    } else {
      res.status(400).json({ message: "The Id is not found" });
    }
  });
}

module.exports = validateActionId;

// async function validateProjectId(req, res, next) {
//   let { id } = req.params;
//   id = Number(id);
//   if (Number.isInteger(id)) {
//      req.valid = true;
//      const project = await Projects.get(id)
//      if (project) {
//         req.project = project;
//         next();
//      } else {
//         res.status(404).json({ message: 'the project with that id has entered the Blackhole!' });
//      }
//   } else {
//      res.set('X-Nasty', 'Nasty ID').status(400).json({ message: "that does not look like an id!!" });
//   }
// }; 