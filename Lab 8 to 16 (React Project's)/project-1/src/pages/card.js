import React, { useState, useEffect } from 'react';

function Card() {
  const [facultyData, setFacultyData] = useState([]); // Store faculty data fetched from backend
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state
  const [totalPages, setTotalPages] = useState(1);  // State for total pages
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  // Fetch faculty data from backend
  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await fetch(`https://serverno.onrender.com/faculties?page=${currentPage}`); // Adjust the endpoint to your API
        if (!response.ok) {
          throw new Error('Failed to fetch faculty data');
        }
        const data = await response.json();
        setFacultyData(data.faculties || []); // Set fetched data to state
        setTotalPages(data.totalPages); // Update total pages
        setLoading(false); // Stop loading
      } catch (error) {
        setError(error.message);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchFacultyData(); // Fetch data when component mounts
  }, [currentPage]);

  // Handlers for navigation
  const handleNext = () => {
    if (currentIndex < facultyData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (currentPage < totalPages) {
      // Go to the next page if the end of the current page is reached
      setCurrentPage((prevPage) => prevPage + 1);
      setCurrentIndex(0); // Reset index for the new page
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (currentPage > 1) {
      // Go to the previous page if the beginning of the current page is reached
      setCurrentPage((prevPage) => prevPage - 1);
      setCurrentIndex(facultyData.length - 1); // Set index to last item of new page
    }
  };

  // Show loading or error message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (facultyData.length === 0) {
    return <div>No faculty data available</div>;
  }

  // Show faculty card
  const faculty = facultyData[currentIndex];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ width: '50%' }}>
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
          <div className="d-flex justify-content mt-3">
            <button className="btn btn-primary mx-5" onClick={handlePrevious} disabled={currentPage === 1 && currentIndex === 0}>
              Previous
            </button>
            <button className="btn btn-primary mx-5" onClick={handleNext} disabled={currentIndex === facultyData.length - 1 && currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
