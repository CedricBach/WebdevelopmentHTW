var loginAttempts = 3;

function validateAdmin() {

    var setRole = document.getElementById("roleChoice").options[document.getElementById("roleChoice").selectedIndex].value;

    if(document.getElementById("adminname").value == "Admin" && document.getElementById("adminpsw").value == "Admin" && setRole == "./admin.html"){
        document.forms["login"].action = "./admin.html";
                return true;
    }else if(document.getElementById("adminname").value == "Admin" && document.getElementById("adminpsw").value == "Admin" && setRole == "./staff.html"){
        document.forms["login"].action = "./staff.html";
                return true;
    }else{
        loginAttempts--;
        alert("Login Credentials Incorrect");

        if (loginAttempts == 0) {
            disableAll();
        }
        return false;
    }
}

function disableAll() {
    document.getElementById("login1").disabled = true;
    document.getElementById("roleChoice").disabled = true;
    document.getElementById("adminname").disabled = true;
    document.getElementById("adminpsw").disabled = true;
}