import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function FacultyDetail() {
  const [faculty, setFaculty] = useState(null); // Track the individual faculty
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any error
  const { id } = useParams(); // Get the FacultyID from the URL
  
  useEffect(() => {
    const apiUrl = `https://serverno.onrender.com/faculties/${id}` || 'http://localhost:3001/faculties/${id}'; // Fix the URL construction
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch faculty');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched faculty:", data); // Log fetched data
        setFaculty(data); // Store the fetched faculty directly
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching faculty:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]); // Depend on id

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!faculty) {
    return <div>Faculty not found</div>; // Handle case when faculty is not found
  }

  return (
    <div className="container mt-5">
      <Link to="/faculty">Back to Faculty List</Link>
      <div className="card" style={{ width: '18rem', margin: 'auto' }}>
        <img src={faculty.FacultyImage} className="card-img-top" alt={faculty.FacultyName} />
        <div className="card-body">
          <h5 className="card-title">{faculty.FacultyName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{faculty.FacultyDesignation}</h6>
          <p className="card-text">
            <strong>Education:</strong> {faculty.FacultyEducationQualification}<br />
            <strong>Experience:</strong> {faculty.FacultyExperience}<br />
            <strong>Working Since:</strong> {faculty.FacultyWorkingSince}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FacultyDetail;
