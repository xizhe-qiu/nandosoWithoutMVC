document.addEventListener("DOMContentLoaded", function () {
    //when the document opens this runs
    loadSpecials();
});

function loadSpecials() {
    SpecialModule.getSpecials(setupSpecialsTable);
}

function setupSpecialsTable(specialList) {
    var specialTable = document.getElementById("specialList");
    console.log(specialList);

    for (i = 0; i < specialList.length; i++) {
        //create a row
        var row = document.createElement("tr");
        //create columns
        var dishCol = document.createElement("td");
        //fill in data
        dishCol.innerHTML = specialList[i].Dish;
        //append the column into the row
        row.appendChild(dishCol);
        var priceCol = document.createElement("td");
        priceCol.innerHTML = specialList[i].Price;
        row.appendChild(priceCol);

        //finally append the row to the table
        specialTable.appendChild(row);
    }
}