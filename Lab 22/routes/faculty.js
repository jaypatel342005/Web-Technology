// routes/faculty.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const facultyController = require('../controllers/facultyController');

const router = express.Router();

/**
 * @route   POST /api/faculty
 * @desc    Create a new faculty member
 * @access  Public
 */
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('department', 'Department is required').not().isEmpty(),
    check('designation', 'Designation is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phoneNumber', 'Please include a valid phone number').matches(/^\+?[1-9]\d{1,14}$/),
    check('officeLocation', 'Office location is required').not().isEmpty(),
    check('profilePicture', 'Please include a valid image URL').optional().isURL(),
    check('courses', 'Courses must be an array of strings').optional().isArray(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
  facultyController.createFaculty
);

/**
 * @route   GET /api/faculty
 * @desc    Get all faculty members
 * @access  Public
 */
router.get('/', facultyController.getAllFaculty);

/**
 * @route   GET /api/faculty/:id
 * @desc    Get a single faculty member by ID
 * @access  Public
 */
router.get('/:id', facultyController.getFacultyById);

/**
 * @route   PUT /api/faculty/:id
 * @desc    Update a faculty member by ID
 * @access  Public
 */
router.put(
  '/:id',
  [
    check('email', 'Please include a valid email').optional().isEmail(),
    check('phoneNumber', 'Please include a valid phone number').optional().matches(/^\+?[1-9]\d{1,14}$/),
    check('profilePicture', 'Please include a valid image URL').optional().isURL(),
    check('courses', 'Courses must be an array of strings').optional().isArray(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
  facultyController.updateFaculty
);

/**
 * @route   DELETE /api/faculty/:id
 * @desc    Delete a faculty member by ID
 * @access  Public
 */
router.delete('/:id', facultyController.deleteFaculty);

module.exports = router;
