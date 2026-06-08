console.log("JavaScript is working!");

// Get all rows in the courses table body
const courseRows = document.querySelectorAll('.recent-courses tbody tr');

courseRows.forEach(function(row) { 
    row.addEventListener('click', function() {
        // Get the status cell (last cell in the row)
        const statusCell = row.querySelector('td:last-child');

        //Toggle between Completed and Pending
        if (statusCell.textContent == 'Pending') {
            statusCell.textContent = 'Completed' ;
            statusCell.style.color = '#1D9E75';
            row.style.backgroundColor = '#f0faf6';
        } else if (statusCell.textContent === 'Completed') {
            statusCell.textContent = 'Pending';
            statusCell.style.color = '#BA7517';
            row.style.backgroundColor = '';
        }
    });
});