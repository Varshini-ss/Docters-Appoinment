function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    }
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    }

    const caro = document.querySelector('.caro');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev1');
    const nextBtn = document.querySelector('.next1');
    let index = 0;
    
    // Update Carousel Function
    function updateCaro() {
      cards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
          card.classList.add('active');
        }
      });
    }
    
    // Button Navigation
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + cards.length) % cards.length; // Decrement index and loop back
      updateCaro();
    });
    
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % cards.length; // Increment index and loop back
      updateCaro();
    });
    
    // Auto Play Function
    function autoPlay() {
      index = (index + 1) % cards.length; // Increment index and loop back
      updateCaro();
    }
    
    // Set Auto Play Interval
    setInterval(autoPlay, 3000); // Change slides every 3 seconds
    
    // Initialize the Carousel
    updateCaro();
    
function formValidation(event) {
  event.preventDefault(); // Prevent form submission for validation

  const usernames = document.getElementById('usernames').value.trim();
  const userphoneno = document.getElementById('userphoneno').value.trim();
  const useremail = document.getElementById('useremail').value.trim();
  const userdate = document.getElementById('userdate').value.trim();

  let isValid = true; // Flag to check if the form is valid

  // Full Name Validation
  if (usernames === "") {
      setError('usernames', 'Enter your full name');
      isValid = false;
  } else {
      setSuccess('usernames');
  }

  // Phone Number Validation
  if (userphoneno === "") {
      setError('userphoneno', 'Enter your phone number');
      isValid = false;
  } else {
      setSuccess('userphoneno');
  }

  // Email Validation
  if (useremail === "") {
      setError('useremail', 'Enter your email address');
      isValid = false;
  } else {
      setSuccess('useremail');
  }

  // Date Validation
  if (userdate === "") {
      setError('userdate', 'Enter a date for the appointment');
      isValid = false;
  } else {
      setSuccess('userdate');
  }

  if (isValid) {
      // If form is valid, show confirmation modal
      showModal();
  }

  return isValid; // Return true if all fields are valid
}

function setError(inputId, message) {
  const errorDiv = document.getElementById(`error-${inputId}`);
  errorDiv.innerText = message; // Display the error message
  errorDiv.style.color = 'red'; // Optional: style the error message
}

function setSuccess(inputId) {
  const errorDiv = document.getElementById(`error-${inputId}`);
  errorDiv.innerText = ''; // Clear the error message
}

// Show the confirmation modal
function showModal() {
  document.getElementById('confirmationModal').style.display = 'block'; // Show the modal
}

// Close the modal
function closeModal() {
  document.getElementById('confirmationModal').style.display = 'none'; // Close the modal
}

// When the user confirms the submission, submit the form
document.getElementById('confirmBtn').addEventListener('click', function() {
  document.getElementById('form').submit(); // Submit the form
  closeModal(); // Close the modal
});

// Add the event listener to the form
document.getElementById('form').addEventListener('submit', function(event) {
  formValidation(event); // Call formValidation function when form is submitted
});
// Close the modal when the user clicks on the close button
document.querySelector('.close').addEventListener('click', function() {
  closeModal(); // Close the modal without submitting
});
