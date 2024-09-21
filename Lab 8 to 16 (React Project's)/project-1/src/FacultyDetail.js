import React from 'react';
import { Link, useParams } from 'react-router-dom';


const facultyData =[
    {
      "FacultyID": 1,
      "FacultyName": "Dr. Gopi Sanghani",
      "FacultyDesignation": "Dean - School of Computer Science",
      "FacultyEducationQualification": "Ph.D. , M.E. (CE)",
      "FacultyExperience": "22+ Years",
      "FacultyWorkingSince": "Jul-2012",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg"
    },
    {
      "FacultyID": 2,
      "FacultyName": "Dr. Nilesh Gambhava",
      "FacultyDesignation": "Professor",
      "FacultyEducationQualification": "Ph.D. , M.E. (CE)",
      "FacultyExperience": "19+ Years",
      "FacultyWorkingSince": "Jul-2009",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
    },
    {
      "FacultyID": 3,
      "FacultyName": "Dr. Pradyumansinh Jadeja",
      "FacultyDesignation": "Associate Professor",
      "FacultyEducationQualification": "Ph.D. , M.E. (CE)",
      "FacultyExperience": "17+ Years",
      "FacultyWorkingSince": "Jul-2009",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
    },
    {
      "FacultyID": 4,
      "FacultyName": "Prof. Maulik Trivedi",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.Tech. (CSE)",
      "FacultyExperience": "14+ Years",
      "FacultyWorkingSince": "Jun-2009",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
    },
    {
      "FacultyID": 5,
      "FacultyName": "Prof. Dixita Kagathara",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.Tech. (Web Technology)",
      "FacultyExperience": "13+ Years",
      "FacultyWorkingSince": "Jul-2009",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/9---28-04-2023-02-06-37.jpg"
    },
    {
      "FacultyID": 6,
      "FacultyName": "Prof. Rupesh Vaishnav",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.E. (CE)",
      "FacultyExperience": "14+ Years",
      "FacultyWorkingSince": "May-2013",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg"
    },
    {
      "FacultyID": 7,
      "FacultyName": "Prof. Swati Sharma",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.Tech. (CSE)",
      "FacultyExperience": "14+ Years",
      "FacultyWorkingSince": "May-2013",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg"
    },
    {
      "FacultyID": 8,
      "FacultyName": "Prof. Arjun Bala",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.Tech. (CSE)",
      "FacultyExperience": "12+ Years",
      "FacultyWorkingSince": "Jul-2013",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg"
    },
    {
      "FacultyID": 9,
      "FacultyName": "Prof. Mayur Padia",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.E. (CE)",
      "FacultyExperience": "13+ Years",
      "FacultyWorkingSince": "Jul-2011",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/13---28-04-2023-02-07-48.jpg"
    },
    {
      "FacultyID": 10,
      "FacultyName": "Prof. Vijay Shekhat",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.E. (CE)",
      "FacultyExperience": "10+ Years",
      "FacultyWorkingSince": "Jun-2012",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/16---28-04-2023-02-08-00.jpg"
    },
    {
      "FacultyID": 11,
      "FacultyName": "Prof. Naimish Vadodariya",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.E. (CE)",
      "FacultyExperience": "9+ Years",
      "FacultyWorkingSince": "Jun-2015",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/214---28-04-2023-02-08-35.jpg"
    },
    {
      "FacultyID": 12,
      "FacultyName": "Prof. UmeshKumar Thoriya",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.Tech. (CSE)",
      "FacultyExperience": "9+ Years",
      "FacultyWorkingSince": "Jul-2015",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/221---28-04-2023-02-08-50.jpg"
    },
    {
      "FacultyID": 13,
      "FacultyName": "Prof. Jayesh Vagadiya",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.E (CE)",
      "FacultyExperience": "7+ Years",
      "FacultyWorkingSince": "Jul-2015",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/219---28-04-2023-02-09-01.jpg"
    },
    {
      "FacultyID": 14,
      "FacultyName": "Prof. Krunal Vyas",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.Tech.(ICT), B.E. (EC)",
      "FacultyExperience": "8+ Years",
      "FacultyWorkingSince": "Jul-2018",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/290---28-04-2023-02-09-16.jpg"
    },
    {
      "FacultyID": 15,
      "FacultyName": "Prof. Jay Dhamsaniya",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "M.E. (E.C.), B.Tech. (E.C.)",
      "FacultyExperience": "10+ Years",
      "FacultyWorkingSince": "Jul-2012",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/46---28-04-2023-02-09-28.jpg"
    },
    {
      "FacultyID": 16,
      "FacultyName": "Prof. Mehul Bhundiya",
      "FacultyDesignation": "Assistant Professor",
      "FacultyEducationQualification": "BE (CE), ME (CE)",
      "FacultyExperience": "8+ Years",
      "FacultyWorkingSince": "Aug-2018",
      "FacultyImage":
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/294---28-04-2023-02-09-43.jpg"
    }
  ]


function FacultyDetail() {

    
  // const [faculties, setFaculties] = useState([]);
  // useEffect(()=>{
  //   let apiUrl = "http://localhost:3000/faculties";
  //   fatch(apiUrl).then((res)=>res.json()).then(()=>setFaculties(res.records));
  // },[])
  
  const { id } = useParams(); // Get the FacultyID from the URL
  const faculty = facultyData.find(fac => fac.FacultyID === parseInt(id)); // Find the faculty member by ID

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
