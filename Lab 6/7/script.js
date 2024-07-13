document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addStudentButton').addEventListener('click', addStudent);
    document.getElementById('updateStudentButton').addEventListener('click', updateStudent);
});

let students = [];
let currentEditIndex = -1;

function addStudent() {
    const rollNo = document.getElementById('studentRollNo').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const surname = document.getElementById('studentSurname').value.trim();
    const studentClass = document.getElementById('studentClass').value.trim();

    if (rollNo && name && surname && studentClass) {
        const student = {
            rollNo,
            name,
            surname,
            studentClass
        };
        students.push(student);
        clearForm();
        renderStudents();
    } else {
        alert('Please fill in all fields');
    }
}

function clearForm() {
    document.getElementById('studentRollNo').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('studentSurname').value = '';
    document.getElementById('studentClass').value = '';
    document.getElementById('addStudentButton').style.display = 'inline-block';
    document.getElementById('updateStudentButton').style.display = 'none';
}

function renderStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
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
    document.getElementById('studentRollNo').value = student.rollNo;
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentSurname').value = student.surname;
    document.getElementById('studentClass').value = student.studentClass;
    document.getElementById('addStudentButton').style.display = 'none';
    document.getElementById('updateStudentButton').style.display = 'inline-block';
}

function updateStudent() {
    const rollNo = document.getElementById('studentRollNo').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const surname = document.getElementById('studentSurname').value.trim();
    const studentClass = document.getElementById('studentClass').value.trim();

    if (rollNo && name && surname && studentClass) {
        const student = {
            rollNo,
            name,
            surname,
            studentClass
        };
        students[currentEditIndex] = student;
        clearForm();
        renderStudents();
        currentEditIndex = -1;
    } else {
        alert('Please fill in all fields');
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

// Initial render
renderStudents();
