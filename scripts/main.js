console.log("JavaScript is working!");

// Gets credits earned card
const creditsEarnedEl = document.querySelector('.stat-card:first-child h2');
let creditsEarned = 124;

// Get all rows in the courses table body
const courseRows = document.querySelectorAll('.recent-courses tbody tr');

courseRows.forEach(function(row) { 
    row.addEventListener('click', function() {

        // Get the status cell and credits for this row
        const statusCell = row.querySelector('td:last-child');
        const rowCredits = parseInt(row.dataset.credits);

        //Toggle between Completed and Pending
        if (statusCell.textContent == 'Pending') {
            statusCell.textContent = 'Completed' ;
            statusCell.style.color = '#1D9E75';
            row.style.backgroundColor = '#f0faf6';
            creditsEarned += rowCredits;
        } else if (statusCell.textContent === 'Completed') {
            statusCell.textContent = 'Pending';
            statusCell.style.color = '#BA7517';
            row.style.backgroundColor = '';
            creditsEarned -= rowCredits;
        }

        //Update the credits earned card
        creditsEarnedEl.textContent = creditsEarned;
    });
});

//Login form handler
const loginButton = document.querySelector('.login-card button');

if (loginButton) {
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.querySelector('.login-card input[type="email"]').value;
        if (email ==='') {
            alert('Please enter your email address');
        } else {
            alert('Welcome to SmartTrack, ' + email + '!');
        }
    });
}