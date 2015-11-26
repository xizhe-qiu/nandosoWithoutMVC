var EmployeeModule = (function () {

    //callback pushes information out 
    return {
        getEmployees: function (callback) {
            // code to make api calls goes here

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://nandosowithoutmvc.azurewebsites.net/api/Employees",
                success: function (data) {
                    callback(data);//so this is equivilent to setupStudentsTable(data)
                }
            });
        },

        addEmployee: function (employee, callback) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 201) {
                    callback();
                }
            }

            xhttp.open("POST", "http://nandosowithoutmvc.azurewebsites.net/api/Employees", true)
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(employee));
        }
    }
}());