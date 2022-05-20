import { body } from "express-validator";

export const taskFormValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("name is required.")
      .isLength({ min: 5, max: 40 })
      .withMessage("The title must be at least 5 characters long."),
    body("description")
      .isString()
      .withMessage("description is required.")
      .isLength({ min: 10, max: 255 })
      .withMessage("The title must be at least 5 characters long."),
    body("difficulty")
      .isString()
      .withMessage("difficulty is required.")
      .isLength({ min: 10, max: 255 })
      .withMessage("The title must be at least 5 characters long.")
      .custom((value: string) => {
        if (value !== "easy" && value !== "medium" && value !== "difficult") {
          throw new Error(
            "difficulty accepts only the values: 'easy', 'medium', 'difficult'"
          );
        }
        return true;
      }),
  ];
};
