var SpecialModule = (function () {

    //callback pushes information out 
    return {
        getSpecials: function (callback) {
            // code to make api calls goes here

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://nandosowithoutmvc.azurewebsites.net/api/Specials",
                success: function (data) {
                    callback(data);//so this is equivilent to setupStudentsTable(data)
                }
            });
        },

        addSpecial: function(special, callback){
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 201) {
                    callback();
                }
            }

            xhttp.open("POST","http://nandosowithoutmvc.azurewebsites.net/api/Specials", true)
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(special));
        }
    }
}());