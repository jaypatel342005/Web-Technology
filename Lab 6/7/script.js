document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to buttons
    document.getElementById('addStudentButton').addEventListener('click', addStudent);
    document.getElementById('updateStudentButton').addEventListener('click', updateStudent);
});

// Array to store student data
let students = [];
// Index of the student being edited
let currentEditIndex = -1;

function addStudent() {
    // Get input values
    const rollNo = document.getElementById('studentRollNo').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const surname = document.getElementById('studentSurname').value.trim();
    const studentClass = document.getElementById('studentClass').value.trim();

    // Validate input
    if (rollNo && name && surname && studentClass) {
        // Create student object
        const student = {
            rollNo,
            name,
            surname,
            studentClass
        };
        // Add student to array
        students.push(student);
        // Clear form fields
        clearForm();
        // Re-render student list
        renderStudents();
    } else {
        alert('Please fill in all fields');
    }
}

function clearForm() {
    // Clear form fields
    document.getElementById('studentRollNo').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('studentSurname').value = '';
    document.getElementById('studentClass').value = '';
    // Show Add button, hide Update button
    document.getElementById('addStudentButton').style.display = 'inline-block';
    document.getElementById('updateStudentButton').style.display = 'none';
}
function renderStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    // Create table rows for each student
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.studentClass}</td>
            <td>
                <button class="edit" onclick="editStudent(${index})">Edit</button>
                <button class="delete" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}

function editStudent(index) {
    currentEditIndex = index;
    const student = students[index];
    // Populate form fields with selected student's data
    document.getElementById('studentRollNo').value = student.rollNo;
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentSurname').value = student.surname;
    document.getElementById('studentClass').value = student.studentClass;
    // Show Update button, hide Add button
    document.getElementById('addStudentButton').style.display = 'none';
    document.getElementById('updateStudentButton').style.display = 'inline-block';
}

function updateStudent() {
    const rollNo = document.getElementById('studentRollNo').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const surname = document.getElementById('studentSurname').value.trim();
    const studentClass = document.getElementById('studentClass').value.trim();

    // Validate input
    if (rollNo && name && surname && studentClass) {
        // Update student object in array
        const student = {
            rollNo,
            name,
            surname,
            studentClass
        };
        students[currentEditIndex] = student;
        // Clear form fields
        clearForm();
        // Re-render student list
        renderStudents();
        // Reset edit index
        currentEditIndex = -1;
    } else {
        alert('Please fill in all fields');
    }
}

function deleteStudent(index) {
    // Remove student from array
    students.splice(index, 1);
    // Re-render student list
    renderStudents();
}

// Initial render
renderStudents();
