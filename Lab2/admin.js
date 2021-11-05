function displayStudentCRUD() {
    document.getElementById("studentCrud").style.display = "block";
    document.getElementById("studentList").style.display = "block";
    hideStaffCRUD();
    closeAddStaffForm();
}

function hideStudentCRUD() {
    document.getElementById("studentCrud").style.display = "none"
    document.getElementById("studentList").style.display = "none";
}

function displayStaffCRUD() {
    document.getElementById("staffCrud").style.display = "block";
    document.getElementById("staffList").style.display = "block";
    hideStudentCRUD();
    closeAddStudentForm();
}

function hideStaffCRUD() {
    document.getElementById("staffCrud").style.display = "none";
    document.getElementById("staffList").style.display = "none";
}

function closeAddStaffForm() {
    document.getElementById("addStaffForm").style.display = "none";
}

function openAddStaffForm() {
    document.getElementById("addStaffForm").style.display = "block";
}

function openAddStudentForm() {
    document.getElementById("addStudentForm").style.display = "block";
    closeAddStaffForm();
}

function closeAddStudentForm() {
    document.getElementById("addStudentForm").style.display = "none";
}

function addStudent() {
    var table = document.getElementById("listOfStudents").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = document.getElementById("idStudent").value;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = document.getElementById("firstnameStudent").value;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = document.getElementById("lastnameStudent").value;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = document.getElementById("dobStudent").value;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = document.querySelector("input[name='genderStudent']:checked").value;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = document.getElementById("departmentStudent").value;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = document.getElementById("emailStudent").value;
}

function submitStudent() {
    addStudent();
    closeAddStudentForm();
}

function addStaff() {
    var table = document.getElementById("listOfStaffs").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = document.getElementById("idStaff").value;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = document.getElementById("firstnameStaff").value;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = document.getElementById("lastnameStaff").value;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = document.getElementById("dobStaff").value;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = document.querySelector("input[name='genderStaff']:checked").value;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = document.getElementById("emailStaff").value;
}

function submitStaff() {
    addStaff();
    closeAddStaffForm();
}