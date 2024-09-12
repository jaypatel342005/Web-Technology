const Faculty = require('../models/Faculty');

/**
 * @desc    Create a new faculty member
 * @route   POST /api/faculty
 * @access  Public
 */
exports.createFaculty = async (req, res, next) => {
  try {
    const { id } = req.body;
    // Check if the ID already exists
    const existingFaculty = await Faculty.findOne({ id });
    if (existingFaculty) {
      return res.status(400).json({
        success: false,
        error: 'Faculty with this ID already exists',
      });
    }
    const faculty = await Faculty.create(req.body);
    res.status(201).json({
      success: true,
      data: faculty,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc    Get all faculty members
 * @route   GET /api/faculty
 * @access  Public
 */
exports.getAllFaculty = async (req, res, next) => {
  try {
    const facultyList = await Faculty.find();
    res.status(200).json({
      success: true,
      count: facultyList.length,
      data: facultyList,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc    Get a single faculty member by ID
 * @route   GET /api/faculty/:id
 * @access  Public
 */
exports.getFacultyById = async (req, res, next) => {
  try {
    const faculty = await Faculty.findOne({ id: req.params.id });
    if (!faculty) {
      return res.status(404).json({
        success: false,
        error: 'Faculty not found',
      });
    }
    res.status(200).json({
      success: true,
      data: faculty,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc    Update a faculty member by ID
 * @route   PUT /api/faculty/:id
 * @access  Public
 */
exports.updateFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!faculty) {
      return res.status(404).json({
        success: false,
        error: 'Faculty not found',
      });
    }

    res.status(200).json({
      success: true,
      data: faculty,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc    Delete a faculty member by ID
 * @route   DELETE /api/faculty/:id
 * @access  Public
 */
exports.deleteFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.findOneAndDelete({ id: req.params.id });

    if (!faculty) {
      return res.status(404).json({
        success: false,
        error: 'Faculty not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Faculty deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};
