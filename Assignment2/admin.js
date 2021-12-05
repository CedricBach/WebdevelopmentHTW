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
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = document.getElementById("dojStudent").value;
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
    cell8 = newRow.insertCell(6);
    cell8.innerHTML = document.getElementById("dojStaff").value;
}

function submitStaff() {
    addStaff();
    closeAddStaffForm();
}

function getAgeStudent() {
    var dateStudent = new Date(document.getElementById("dobStudent").value);
    var today = new Date().getFullYear();
    var age = today - dateStudent.getFullYear();
    var maxAge = 60;
    var minAge = 18;
    if(age > maxAge || age < minAge)
    {
        alert("Invalid DOB");
        document.getElementById("dobStudent").value = "";
    }else{
    }

}

function getAgeStaff() {
    var dateStaff = new Date(document.getElementById("dobStaff").value);
    var today = new Date().getFullYear();
    var age = today - dateStaff.getFullYear();
    var maxAge = 60;
    var minAge = 18;
    if(age > maxAge || age < minAge)
    {
        alert("Invalid DOB");
        document.getElementById("dobStaff").value = "";
    }else{

    }
}

function filterStudentsD() {
    var students=[];


    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterStudentD").value;
    filter = input;
    table = document.getElementById("listOfStudents");
    tr = table.getElementsByTagName("tr");

    
    for(i = 1; i < tr.length; i++){
        var a = tr[i].getElementsByTagName("td")[5];
        students[i] = a;
    }

    function isDep(dep){
        return dep = input;
    }

    var filteredStudents = students.filter(isDep);
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td && filteredStudents) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}

function filterStudentsS() {
    var students=[];


    var input, filter, table, tr, td, i, txtValue, filteredStudents, w;
    input = document.getElementById("filterStudentS").value;
    filter = input;
    table = document.getElementById("listOfStudents");
    tr = table.getElementsByTagName("tr");


    
    for(i = 1; i < tr.length; i++){
        var a = new Date(tr[i].getElementsByTagName("td")[7]).getMonth + 1;
        students[i] = a;
    }

    function isWinter(time){
        return time >= 10 || time <= 2;
    }

    function isSummer(time){
        return (time >= 4 && time <=9);
    }

    function whatS(filter){
        if(filter == "Winter"){
            filteredStudents = students.filter(isWinter);
        }else if(filter == "Summer"){
            filteredStudents = students.filter(isSummer);
        }
    }
    
    whatS(input);
    if(input == "Winter"){
        for (i = 1; i < tr.length; i++) {
            td = new Date(tr[i].getElementsByTagName("td")[7].innerHTML).getMonth() +1;
            if (td && filteredStudents) {
                if (filter == "Winter" && (td >= 10 || td <=2)) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }

    if(input == "Summer"){
        for (i = 1; i < tr.length; i++) {
            td = new Date(tr[i].getElementsByTagName("td")[7].innerHTML).getMonth() +1;
            if (td && filteredStudents) {
                if (filter == "Summer" && (td >= 4 && td <=9)) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }
}