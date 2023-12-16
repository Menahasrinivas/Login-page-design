document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var companyName = document.getElementById('companyName').value;
    var shopAddress = document.getElementById('shopAddress').value;
    var employees = document.getElementById('employees').value;
    var jobType = document.getElementById('jobType').value;
    var workingHours = document.getElementById('workingHours').value;

    // Check if any required field is empty
    if (!firstName || !lastName || !companyName || !shopAddress || !employees || !jobType || !workingHours) {
      // Display error message and return
      showErrorMessage('Fill all the requirements.');
      return;
    }

    // Clear any previous error message
    hideErrorMessage();

    // Display popup message
    var popupMessage = document.getElementById('popup-message');
    popupMessage.innerHTML = `Registration successful!\n\n
      Name: ${firstName} ${lastName}\n
      Company Name: ${companyName}\n
      Shop/Company Address: ${shopAddress}\n
      Number of Employees: ${employees}\n
      Job Type: ${jobType}\n
      Working Hours: ${workingHours}`;

    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';

    // Reset the form fields after successful registration
    form.reset();
  });

  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  }

  function showErrorMessage(message) {
    document.getElementById('error-message').innerText = message;
  }

  function hideErrorMessage() {
    document.getElementById('error-message').innerText = '';
  }

  // Close the popup if the overlay is clicked
  document.getElementById('overlay').addEventListener('click', closePopup);

  // Prevent clicks within the popup from closing it
  document.getElementById('popup').addEventListener('click', function (event) {
    event.stopPropagation();
  });
});