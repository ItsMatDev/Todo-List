import Joi from "joi";

const taskValidationSchema = Joi.object({ text: Joi.string().min(1).max(50).trim().required() });

const validateTask = (req, res, next) => {
  const { error } = taskValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validateTask;
