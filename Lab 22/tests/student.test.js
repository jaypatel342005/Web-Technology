const request = require('supertest');
const app = require('../serverofstudent');  // Import your app

describe('Student API', () => {
  let studentId;

  // Test for creating a new student
  it('should create a new student', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({
        id: 1,
        name: 'John Doe',
        age: 22,
        major: 'Computer Science',
        email: 'johndoe@example.com',
        phoneNumber: '+1234567890'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('data');
    studentId = res.body.data.id;
  });

  // Test for getting all students
  it('should get all students', async () => {
    const res = await request(app).get('/api/students');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  // Test for getting a single student by ID
  it('should get a student by ID', async () => {
    const res = await request(app).get(`/api/students/${studentId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  // Test for updating a student by ID
  it('should update a student by ID', async () => {
    const res = await request(app)
      .put(`/api/students/${studentId}`)
      .send({
        name: 'John Smith',
        age: 23,
        major: 'Mathematics',
        email: 'johnsmith@example.com',
        phoneNumber: '+0987654321'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  // Test for deleting a student by ID
  it('should delete a student by ID', async () => {
    const res = await request(app).delete(`/api/students/${studentId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Student deleted successfully');
  });
});
