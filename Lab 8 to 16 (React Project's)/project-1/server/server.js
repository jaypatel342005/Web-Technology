const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const Faculty = require('./faculties');
const { body, validationResult } = require('express-validator');

// MongoDB connection string directly in the code
const connectionString = "mongodb+srv://jay:%23jay%40345@jay.aj2ou.mongodb.net/faculties";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit if DB connection fails
});

const app = express();
app.use(cors());
app.use(helmet()); // Security by setting various HTTP headers
app.use(bodyParser.json());

// Rate limiting to prevent abuse (e.g., max 100 requests per 10 minutes)
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
});
app.use(limiter);

// Error handling middleware
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
}

// Async wrapper to catch errors
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Validate faculty input
const validateFaculty = [
    body('FacultyName').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
    body('FacultyDesignation').isString().notEmpty().withMessage('Designation is required'),
    body('FacultyEducationQualification').isString().notEmpty().withMessage('Qualification is required'),
    body('FacultyExperience').isNumeric().withMessage('Experience must be a number'),
    body('FacultyWorkingSince').isNumeric().withMessage('Working Since must be a number'),
    body('FacultyImage').isURL().withMessage('Image must be a valid URL'),
];

// Pagination and sorting functionality
app.get('/faculties', asyncHandler(async (req, res) => {
    const { page = 1, limit = 9, sortBy = 'FacultyName', order = 'asc', designation } = req.query;
    
    const query = designation ? { FacultyDesignation: designation } : {};
    
    const faculties = await Faculty.find(query)
        .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    
    const totalFaculties = await Faculty.countDocuments(query);
    
    res.send({
        faculties,
        totalPages: Math.ceil(totalFaculties / limit),
        currentPage: page,
    });
}));

// Get faculty by ID with validation
app.get('/faculties/:id', asyncHandler(async (req, res) => {
    const facultyID = parseInt(req.params.id);
    if (isNaN(facultyID)) {
        return res.status(400).send({ error: 'Invalid FacultyID' });
    }

    const faculty = await Faculty.findOne({ FacultyID: facultyID });
    if (!faculty) {
        return res.status(404).send({ error: 'Faculty not found' });
    }

    res.send(faculty);
}));

// Create new faculty with validation
app.post('/faculties', validateFaculty, asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newFaculty = new Faculty({ ...req.body });
    const savedFaculty = await newFaculty.save();
    res.status(201).send(savedFaculty);
}));

// Update faculty by ID with validation
app.patch('/faculties/:id', validateFaculty, asyncHandler(async (req, res) => {
    const facultyID = parseInt(req.params.id);
    if (isNaN(facultyID)) {
        return res.status(400).send({ error: 'Invalid FacultyID' });
    }

    const faculty = await Faculty.findOne({ FacultyID: facultyID });
    if (!faculty) {
        return res.status(404).send({ error: 'Faculty not found' });
    }

    // Update only the fields that are provided
    Object.keys(req.body).forEach(key => {
        faculty[key] = req.body[key];
    });

    const updatedFaculty = await faculty.save();
    res.send(updatedFaculty);
}));

// Delete faculty by ID
app.delete('/faculties/:id', asyncHandler(async (req, res) => {
    const facultyID = parseInt(req.params.id);
    if (isNaN(facultyID)) {
        return res.status(400).send({ error: 'Invalid FacultyID' });
    }

    const result = await Faculty.deleteOne({ FacultyID: facultyID });
    if (result.deletedCount === 0) {
        return res.status(404).send({ error: 'Faculty not found' });
    }

    res.send({ success: 'Faculty deleted' });
}));

// Search faculties by name (case insensitive)
app.get('/faculties/search/:name', asyncHandler(async (req, res) => {
    const faculties = await Faculty.find({
        FacultyName: { $regex: req.params.name, $options: 'i' },
    });
    res.send(faculties);
}));

// Error handling middleware (should be at the end)
app.use(errorHandler);

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        mongoose.connection.close(false, () => {
            console.log('MongoDB connection closed');
            process.exit(0);
        });
    });
});

// Start the server
const server = app.listen(3001, () => {
    console.log('Server started on port 3001');
});
