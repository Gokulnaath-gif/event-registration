document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const eventName = document.getElementById("event").value;

    document.getElementById("successMessage").innerHTML =
        "Registration successful!<br>" +
        "Thank you, " + name + ".<br>" +
        "You have registered for " + eventName + ".";

    document.getElementById("registrationForm").reset();

});