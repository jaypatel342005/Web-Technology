const Student = require('../models/Student');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @desc      Create a new student
// @route     POST /api/students
// @access    Public
exports.createStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.create(req.body);
  res.status(201).json({ success: true, data: student });
});

// @desc      Get all students
// @route     GET /api/students
// @access    Public
exports.getAllStudents = asyncHandler(async (req, res, next) => {
  const students = await Student.find();
  res.status(200).json({ success: true, count: students.length, data: students });
});

// @desc      Get a student by ID
// @route     GET /api/students/:id
// @access    Public
exports.getStudentById = asyncHandler(async (req, res, next) => {
  const student = await Student.findOne({ id: req.params.id });

  if (!student) {
    return next(new ErrorResponse('Student not found', 404));
  }

  res.status(200).json({ success: true, data: student });
});

// @desc      Update a student by ID
// @route     PUT /api/students/:id
// @access    Public
exports.updateStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findOneAndUpdate({ id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    return next(new ErrorResponse('Student not found', 404));
  }

  res.status(200).json({ success: true, data: student });
});

// @desc      Delete a student by ID
// @route     DELETE /api/students/:id
// @access    Public
exports.deleteStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findOneAndDelete({ id: req.params.id });

  if (!student) {
    return next(new ErrorResponse('Student not found', 404));
  }

  res.status(200).json({ success: true, message: 'Student deleted successfully' });
});
