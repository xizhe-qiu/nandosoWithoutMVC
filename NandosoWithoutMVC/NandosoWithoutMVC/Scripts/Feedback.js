document.addEventListener("DOMContentLoaded", function () {
    //when the document opens this runs
    loadFeedbacks();
});

function loadFeedbacks() {
    FeedbackModule.getFeedbacks(setupFeedbacksTable);
}

function setupFeedbacksTable(FeedbackList) {
    var feedbackTable = document.getElementById("feedbackList");
    console.log(FeedbackList);

    for (i = 0; i < FeedbackList.length; i++) {
        //create a row
        var row = document.createElement("tr");
        //create columns
        var CustomerFirstNameCol = document.createElement("td");
        //fill in data
        CustomerFirstNameCol.innerHTML = FeedbackList[i].CustomerFirstName;
        //append the column into the row
        row.appendChild(CustomerFirstNameCol);
        var CustomerLastNameCol = document.createElement("td");
        CustomerLastNameCol.innerHTML = FeedbackList[i].CustomerLastName;
        row.appendChild(CustomerLastNameCol);
        var CommentCol = document.createElement("td");
        CommentCol.innerHTML = FeedbackList[i].Comment;
        row.appendChild(CommentCol);

        //finally append the row to the table
        feedbackTable.appendChild(row);
    }
}