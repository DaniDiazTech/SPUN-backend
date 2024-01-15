export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res
      .status(400)
      .json({
        err: error.errors?.[0]?.message || "Error occurred during validation"
      });
  }
};
