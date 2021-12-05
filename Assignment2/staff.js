function toggleStudents(){
    var s = document.getElementById("toggleS");
    if( s.textContent === "Show students"){
        s.textContent = "Hide students";
        document.getElementById("studentList").style.display = "block";
        document.getElementById("dontShow").style.display = "block";
        document.getElementById("dontShow2").style.display = "block";
    }else{
        s.textContent = "Show students"
        
        document.getElementById("studentList").style.display = "none";
        document.getElementById("dontShow").style.display = "none";
        document.getElementById("dontShow2").style.display = "none";
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