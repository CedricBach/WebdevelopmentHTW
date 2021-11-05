function toggleStudents(){
    var s = document.getElementById("toggleS");
    if( s.textContent === "Show students"){
        s.textContent = "Hide students";
        document.getElementById("studentList").style.display = "block";
    }else{
        s.textContent = "Show students"
        
        document.getElementById("studentList").style.display = "none";
    }
    
}