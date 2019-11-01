const actionDb = require("../data/helpers/actionModel");

function validateActionId(req, res, next) {
  const id = req.params.id;
  actionDb.get(id).then(action => {
    if (action) {
      action = req.action;
      next();
    } else {
      res.status(400).json({ message: "Invalid action id" });
    }
  });
}

module.exports = validateActionId;