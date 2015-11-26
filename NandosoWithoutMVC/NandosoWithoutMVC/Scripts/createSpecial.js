document.addEventListener("DOMContentLoaded", function () {
    setupSpecialSubmit();
    setupReturn();
});

function setupSpecialSubmit() {

    //Creating student from form parameters

    var form = document.forms.create;
    // Need to add our own custom event for form submission
    form.onsubmit = function (e) {
        // ... and prevent the default action from occuring
        e.preventDefault();

        //Creating student from form parameters
        var newSpecial = {
            // Access the data in the fields with .value 
            Dish: document.getElementById("dishInput").value,
            Price: document.getElementById("priceInput").value
        }

        // Take me back home when done!
        SpecialModule.addSpecial(newSpecial, function () {
            window.location.href = "special.html";
        });
    }

};

// Add event listener, cancel button will take you back to home page
function setupReturn() {
    document.getElementById('btncancel').addEventListener('click', function () {
        window.location.href = "special.html";
    });
}