var ReplyModule = (function () {

    //callback pushes information out 
    return {
        getReplys: function (callback) {
            // code to make api calls goes here

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://nandosowithoutmvc.azurewebsites.net/api/Replies",
                success: function (data) {
                    callback(data);//so this is equivilent to setupStudentsTable(data)
                }
            });
        },

        addReply: function (reply, callback) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 201) {
                    callback();
                }
            }

            xhttp.open("POST", "http://nandosowithoutmvc.azurewebsites.net/api/Replies", true)
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(reply));
        }
    }
}());