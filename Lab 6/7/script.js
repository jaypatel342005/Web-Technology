document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addStudentButton').addEventListener('click', addStudent);
});

let students = [];

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
}

function renderStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        const studentInfo = document.createElement('div');
        studentInfo.textContent = `Roll No: ${student.rollNo}, Name: ${student.name} ${student.surname}, Class: ${student.studentClass}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(index);
        li.appendChild(studentInfo);
        li.appendChild(deleteButton);
        studentList.appendChild(li);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

// Initial render
renderStudents();
