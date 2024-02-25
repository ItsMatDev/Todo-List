const Joi = require("joi");

const taskSchema = Joi.object({ text: Joi.string().min(1).max(50).trim().required() });

const taskValidationSchema = (req, res, next) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = taskValidationSchema;
