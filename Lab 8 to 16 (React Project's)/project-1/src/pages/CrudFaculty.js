import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function AddEditFaculty() {
    const appurl = "https://serverno.onrender.com" ||  'http://localhost:3001'; // Update this URL to your API endpoint
    const navigate = useNavigate();
    const { id } = useParams(); // Get ID from URL params (if exists)
    const [facultyData, setFacultyData] = useState({}); // Store form input
    const [error, setError] = useState(null); // Track errors
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [isDuplicate, setIsDuplicate] = useState(false); // Track duplicates
    const [existingFaculties, setExistingFaculties] = useState([]); // Store existing faculty records

    // Fetch existing faculties on component mount (for duplicate check when adding)
    useEffect(() => {
        const fetchExistingFaculties = async () => {
            try {
                const apiUrl = `${appurl}/faculties`; // Endpoint to get all faculties
                const response = await fetch(apiUrl);

                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        setExistingFaculties(data); // Store existing faculties
                    } else {
                        setExistingFaculties([]); // Ensure it defaults to an empty array if not an array
                        console.error("Unexpected API response format, expected an array.", data);
                    }
                } else {
                    setError("Failed to fetch existing faculties.");
                }
            } catch (err) {
                console.error("Error fetching existing faculties:", err);
                setError("An error occurred while fetching faculties.");
            }
        };

        fetchExistingFaculties();
    }, [appurl]);

    // Fetch faculty details if editing (i.e., if there's an ID in the URL)
    useEffect(() => {
        if (id) {
            const fetchFaculty = async () => {
                try {
                    const response = await fetch(`${appurl}/faculties/${id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setFacultyData(data); // Pre-fill form with fetched data for editing
                    } else {
                        setError("Failed to load faculty data for editing.");
                    }
                } catch (err) {
                    console.error("Error fetching faculty data:", err);
                    setError("An error occurred while fetching faculty data.");
                }
            };

            fetchFaculty();
        }
    }, [id, appurl]);
    
    const handleSubmit = async () => {
        setIsLoading(true);
        setError(null);
        setIsDuplicate(false);

        // Validate all fields are filled
        if (
            !facultyData.FacultyID ||
            !facultyData.FacultyName ||
            !facultyData.FacultyDesignation ||
            !facultyData.FacultyEducationQualification ||
            !facultyData.FacultyExperience ||
            !facultyData.FacultyWorkingSince ||
            !facultyData.FacultyImage
        ) {
            setError("Please fill in all fields."); // Set error message
            setIsLoading(false);
            return; // Exit if fields are not filled
        }

        // Check for duplicates in existing faculty records (only if adding new faculty)
        if (!id) {
            const isDuplicateEntry = existingFaculties.some(existingFaculty => {
                return (
                    existingFaculty.FacultyID === facultyData.FacultyID ||
                    existingFaculty.FacultyName === facultyData.FacultyName ||
                    existingFaculty.FacultyDesignation === facultyData.FacultyDesignation
                );
            });

            if (isDuplicateEntry) {
                setIsDuplicate(true);
                setIsLoading(false);
                return; // Exit if duplicate found
            }
        }

        // Use PATCH for editing, POST for adding
        const apiUrl = id ? `${appurl}/faculties/${id}` : `${appurl}/faculties`;
        const method = id ? "PATCH" : "POST";

        try {
            const response = await fetch(apiUrl, {
                method: method,
                body: JSON.stringify(facultyData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(id ? 'Failed to update faculty' : 'Failed to add faculty');
            }

            const result = await response.json();
            console.log('Submission successful:', result);

            // Redirect to faculty list page after success
            navigate('/faculty');

        } catch (err) {
            console.error('Error during submission:', err);
            setError(err.message); // Set error message if the request fails

        } finally {
            setIsLoading(false); // Stop loading after request completes
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">
                {id ? 'Edit Faculty' : 'Add Faculty'}
            </h2>
            <div className="card p-4 shadow">
                <form>
                    {/* Input fields for faculty details */}
                    <div className="mb-3">
                        <label htmlFor="FacultyID" className="form-label">ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="FacultyID"
                            value={facultyData.FacultyID || ""}
                            onChange={(e) => setFacultyData({ ...facultyData, FacultyID: e.target.value })}
                            disabled={!!id} // Disable ID field if editing
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FacultyName" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="FacultyName"
                            value={facultyData.FacultyName || ""}
                            onChange={(e) => setFacultyData({ ...facultyData, FacultyName: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FacultyDesignation" className="form-label">Designation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="FacultyDesignation"
                            value={facultyData.FacultyDesignation || ""}
                            onChange={(e) => setFacultyData({ ...facultyData, FacultyDesignation: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FacultyEducationQualification" className="form-label">Education Qualification</label>
                        <input
                            type="text"
                            className="form-control"
                            id="FacultyEducationQualification"
                            value={facultyData.FacultyEducationQualification || ""}
                            onChange={(e) => setFacultyData({ ...facultyData, FacultyEducationQualification: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FacultyExperience" className="form-label">Experience</label>
                        <input
                            type="text"
                            className="form-control"
                            id="FacultyExperience"
                            value={facultyData.FacultyExperience || ""}
                            onChange={(e) => setFacultyData({ ...facultyData, FacultyExperience: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FacultyWorkingSince" className="form-label">Working Since</label>
                        <input
                            type="text"
                            className="form-control"
                            id="FacultyWorkingSince"
                            value={facultyData.FacultyWorkingSince || ""}
                            onChange={(e) => setFacultyData({ ...facultyData, FacultyWorkingSince: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FacultyImage" className="form-label">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="FacultyImage"
                            value={facultyData.FacultyImage || ""}
                            onChange={(e) => setFacultyData({ ...facultyData, FacultyImage: e.target.value })}
                        />
                    </div>

                    {/* Error message for submission errors */}
                    {error && <div className="alert alert-danger mt-3">{error}</div>}

                    {/* Duplicate error message */}
                    {isDuplicate && <div className="alert alert-warning mt-3">This faculty ID, name, or designation already exists. Please use different values.</div>}

                    {/* Submit button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn btn-primary w-100 mt-3"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? 'Submitting...' : id ? 'Update' : 'Add'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddEditFaculty;
