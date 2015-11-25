var SpecialModule = (function () {

    //callback pushes information out 
    return {
        getSpecials: function (callback) {
            // code to make api calls goes here

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "/api/Specials",
                success: function (data) {
                    callback(data);//so this is equivilent to setupStudentsTable(data)
                }
            });
        }
    }
}());