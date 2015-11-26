document.addEventListener("DOMContentLoaded", function () {
    setupReplySubmit();
    setupReturn();
});

function setupReplySubmit() {

    //Creating student from form parameters

    var form = document.forms.create;
    // Need to add our own custom event for form submission
    form.onsubmit = function (e) {
        // ... and prevent the default action from occuring
        e.preventDefault();

        //Creating student from form parameters
        var newReply = {
            // Access the data in the fields with .value 
            FeedbackID: document.getElementById("feedbackIDInput").value,
            EmployeeID:document.getElementById("employeeIDInput").value,
            Content: document.getElementById("contentInput").value
        }

        // Take me back home when done!
        ReplyModule.addReply(newReply, function () {
            window.location.href = "Reply.html";
        });
    }

};

// Add event listener, cancel button will take you back to home page
function setupReturn() {
    document.getElementById('btncancel').addEventListener('click', function () {
        window.location.href = "Reply.html";
    });
}