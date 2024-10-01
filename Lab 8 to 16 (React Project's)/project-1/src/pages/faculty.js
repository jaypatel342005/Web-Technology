import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './FacultyCards.css';

function Faculty() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1);  // State for total pages
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch faculties based on the current page
    const apiUrl = `http://localhost:3001/faculties?page=${currentPage}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched faculties:", data);
        setFaculties(data.faculties || []);
        setTotalPages(data.totalPages); // Update total pages
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching faculties:", error);
        setLoading(false);
      });
  }, [currentPage]);

  const handleEdit = (facultyId) => {
    navigate(`/faculties/edit/${facultyId}`);
  };

  const handleDelete = (facultyId) => {
    const apiUrl = `http://localhost:3001/faculties/${facultyId}`;
    fetch(apiUrl, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        // Remove the deleted faculty from the list
        setFaculties(faculties.filter(faculty => faculty.FacultyID !== facultyId));
      })
      .catch((error) => {
        console.error("Error deleting faculty:", error);
      });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!faculties || faculties.length === 0) {
    return <div>No faculty data available</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {faculties.map(faculty => (
          <div key={faculty.FacultyID} className="col-md-4 mb-4">
            <div className="card animated-card" style={{ width: '18rem' }}>
              <Link to={`/faculties/${faculty.FacultyID}`} className="text-decoration-none text-dark">
                <img 
                  src={faculty.FacultyImage} 
                  className="card-img-top" 
                  alt={faculty.FacultyName} 
                />
                <div className="card-body">
                  <h5 className="card-title">{faculty.FacultyName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{faculty.FacultyDesignation}</h6>
                  <p className="card-text">
                    <strong>Education:</strong> {faculty.FacultyEducationQualification}<br />
                    <strong>Experience:</strong> {faculty.FacultyExperience}<br />
                    <strong>Working Since:</strong> {faculty.FacultyWorkingSince}
                  </p>
                </div>
              </Link>
              <div className="card-footer">
                <button 
                  className="btn btn-primary me-2" 
                  onClick={() => handleEdit(faculty.FacultyID)}>
                  Edit
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => handleDelete(faculty.FacultyID)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls mt-3">
        <button 
          className="btn btn-secondary me-2" 
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          className="btn btn-secondary ms-2" 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Faculty;
