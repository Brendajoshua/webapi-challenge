function validateAction(req, res, next) {
    const body = req.body;
    if (Object.keys(body).length === 0) {
      res.status(400).json({ message: "missing action data" });
    } else if (!body.description || !body.notes) {
      res.status(400).json({ message: "missing required description and notes field" });
    } else if (body.description.length > 128) {
      res.status(400).json({ message: "description is too long" });
    } else {
      next();
    }
  }
  
  module.exports = validateAction;