import React from 'react';

const studentData = [
  {
    "StudentID": 1,
    "StudentName": "Alice Johnson",
    "StudentMajor": "Computer Science",
    "StudentYear": "Senior",
    "StudentGPA": "3.8",
    "StudentImage": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "StudentID": 2,
    "StudentName": "Bob Smith",
    "StudentMajor": "Electrical Engineering",
    "StudentYear": "Junior",
    "StudentGPA": "3.6",
    "StudentImage": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "StudentID": 3,
    "StudentName": "Charlie Brown",
    "StudentMajor": "Mechanical Engineering",
    "StudentYear": "Sophomore",
    "StudentGPA": "3.7",
    "StudentImage": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "StudentID": 4,
    "StudentName": "Diana Prince",
    "StudentMajor": "Physics",
    "StudentYear": "Freshman",
    "StudentGPA": "3.9",
    "StudentImage": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "StudentID": 5,
    "StudentName": "Edward Lewis",
    "StudentMajor": "Mathematics",
    "StudentYear": "Senior",
    "StudentGPA": "3.5",
    "StudentImage": "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

const StudentCard = ({ student }) => {
  const { StudentID, StudentName, StudentMajor, StudentYear, StudentGPA, StudentImage } = student;
  
  return (
    <div key={StudentID} className="col-md-4 mb-4">
      <div className="card" style={{ width: '100%' }}>
        <img src={StudentImage} className="card-img-top" alt={StudentName} />
        <div className="card-body">
          <h5 className="card-title">{StudentName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{StudentMajor}</h6>
          <p className="card-text">
            <strong>Year:</strong> {StudentYear}<br />
            <strong>GPA:</strong> {StudentGPA}
          </p>
        </div>
      </div>
    </div>
  );
};

const Students = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {studentData.map(student => (
          <StudentCard key={student.StudentID} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Students;
