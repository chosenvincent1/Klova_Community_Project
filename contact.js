document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Checkboxes validation
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const isAnyCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    // Validation flags
    let isValid = true;
    let errorMessage = "";

    // Validate name
    if (name === "") {
      isValid = false;
      errorMessage += "Name is required.\n";
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      errorMessage += "Please enter a valid email address.\n";
    }

    // Validate phone
    if (phone === "" || isNaN(phone) || phone.length < 10) {
      isValid = false;
      errorMessage += "Please enter a valid phone number.\n";
    }

    // Validate checkboxes
    if (!isAnyCheckboxChecked) {
      isValid = false;
      errorMessage += "Please select at least one checkbox.\n";
    }

    // Validate message
    if (message === "") {
      isValid = false;
      errorMessage += "Message is required.\n";
    }

    // Show errors or submit form
    if (!isValid) {
      alert(errorMessage);
    } else {
      alert("Form submitted successfully!");
      // Optionally, you can handle the form data submission here
      this.submit();
    }
  });