document.addEventListener("DOMContentLoaded", function () {
    //when the document opens this runs
    loadSpecials();
});

document.getElementById("specialSubmit").onclick = function () {
    var item = [{ "Dish": document.getElementById("DishInput").value, "Price": document.getElementById("PriceInput")}];
    SpecialModule.addSpecial(item);
}

function loadSpecials() {
    SpecialModule.getSpecials(setupSpecialsTable);
}

function addSpecialToTable(Dish, Price) {
    var specialTable = document.getElementById("specialList");
    var row = document.createElement("tr");
    var dishCol = document.createElement("td");
    dishCol.innerHTML = Dish;
    row.appendChild(dishCol);
    var priceCol = document.createElement("td");
    priceCol.innerHTML = Price;
    row.appendChild(priceCol);
    specialTable.appendChild(row);
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