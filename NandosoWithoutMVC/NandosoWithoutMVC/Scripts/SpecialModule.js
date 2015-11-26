﻿var SpecialModule = (function () {

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

        //createSpecial: function(item){
        //    $.ajax({
        //        type:"POST",
        //        dataType:"json",
        //        url: "http://nandosowithoutmvc.azurewebsites.net/api/Specials",
        //        data: item
        //    })
        //}
    }
}());