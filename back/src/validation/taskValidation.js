import Joi from "joi";
const taskValidation = (body) => {
  const TaskSchema = Joi.object({ text: Joi.string().min(1).max(50).trim().required() });
  return TaskSchema.validate(body);
};

export default taskValidation;
