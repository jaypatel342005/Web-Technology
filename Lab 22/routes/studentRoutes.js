const express = require('express');
const { check, validationResult } = require('express-validator');
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

const router = express.Router();

const validateStudent = [
  check('id').isNumeric().withMessage('ID must be a number'),
  check('name').not().isEmpty().withMessage('Name is required'),
  check('age').isNumeric().withMessage('Age must be a number'),
  check('major').not().isEmpty().withMessage('Major is required'),
  check('email').isEmail().withMessage('Please provide a valid email'),
  check('phoneNumber').not().isEmpty().withMessage('Phone number is required'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

router.route('/')
  .get(getAllStudents)
  .post(validateStudent, handleValidationErrors, createStudent);

router.route('/:id')
  .get(getStudentById)
  .put(validateStudent, handleValidationErrors, updateStudent)
  .delete(deleteStudent);

module.exports = router;
