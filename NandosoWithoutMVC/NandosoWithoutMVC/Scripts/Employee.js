document.addEventListener("DOMContentLoaded", function () {
    //when the document opens this runs
    loadEmployees();
});

function loadEmployees() {
    EmployeeModule.getEmployees(setupEmployeesTable);
}

function setupEmployeesTable(EmployeeList) {
    var employeeTable = document.getElementById("employeeList");
    console.log(EmployeeList);

    for (i = 0; i < EmployeeList.length; i++) {
        //create a row
        var row = document.createElement("tr");
        var EmployeeIDCol = document.createElement("td");
        EmployeeIDCol.innerHTML = EmployeeList[i].ID;
        row.appendChild(EmployeeIDCol);
        //create columns
        var EmployeeFirstNameCol = document.createElement("td");
        //fill in data
        EmployeeFirstNameCol.innerHTML = EmployeeList[i].EmployeeFirstName;
        //append the column into the row
        row.appendChild(EmployeeFirstNameCol);
        var EmployeeLastNameCol = document.createElement("td");
        EmployeeLastNameCol.innerHTML = EmployeeList[i].EmployeeLastName;
        row.appendChild(EmployeeLastNameCol);
        var RoleCol = document.createElement("td");
        switch (EmployeeList[i].Role) {
            case 0:
                RoleCol.innerHTML = "CEO";
                break;
            case 1:
                RoleCol.innerHTML = "Manager";
                break;
            case 2:
                RoleCol.innerHTML = "Chef";
                break;
            case 3:
                RoleCol.innerHTML = "Waiter";
                break;
        }
        row.appendChild(RoleCol);

        //finally append the row to the table
        employeeTable.appendChild(row);
    }
}