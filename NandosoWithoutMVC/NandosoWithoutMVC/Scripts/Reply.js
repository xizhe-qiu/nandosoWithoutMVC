document.addEventListener("DOMContentLoaded", function () {
    //when the document opens this runs
    loadReplys();
});

function loadReplys() {
    ReplyModule.getReplys(setupReplysTable);
}

function setupReplysTable(ReplyList) {
    var replyTable = document.getElementById("replyList");
    console.log(ReplyList);

    for (i = 0; i < ReplyList.length; i++) {
        //create a row
        var row = document.createElement("tr");
        //create columns
        var FeedbackIDCol = document.createElement("td");
        //fill in data
        FeedbackIDCol.innerHTML = ReplyList[i].FeedbackID;
        //append the column into the row
        row.appendChild(FeedbackIDCol);
        var EmployeeIDCol = document.createElement("td");
        EmployeeIDCol.innerHTML = ReplyList[i].EmployeeID;
        row.appendChild(EmployeeIDCol);
        var ContentCol = document.createElement("td");
        ContentCol.innerHTML = ReplyList[i].Content;
        row.appendChild(ContentCol);

        //finally append the row to the table
        replyTable.appendChild(row);
    }
}