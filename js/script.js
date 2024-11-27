// Select the menu toggle button and navigation links
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle the 'show' class on the nav-links when the menu button is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


/* When logo in the header is clicked this function will be called and it'll redirect it
 Home page. Justification - Reduces extra code that may need to be written in all
pages*/
function logo_clicked() {
    window.location.href = "home.html";
}


// Mortgage
//Content is loaded and waits the events
document.addEventListener("DOMContentLoaded", () =>{

    //Initialising necessary constants
    const form = document.querySelector(".mort-form")
    const loanInput = document.getElementById("loan-amount");
    const incomeInput = document.getElementById("income");
    const termInput = document.getElementById("term");
    const submitButton = document.getElementById("submit-mortgage");

    //Initialising assessment constant
    const assessmentSection = document.getElementById("assessment");


    form.addEventListener("submit", (event) => {
        //Stops the form from messing with the page by refreshing it
        event.preventDefault();

        //Loads the value from the above initialised variables
        const loanAmount = parseFloat(loanInput.value);
        const monthlyIncome = parseFloat(incomeInput.value);
        const loanTerm = parseInt(termInput.value);


        if (isNaN(loanAmount) || loanAmount <=0){
            alert("Please enter a valid loan amount");
            return;
        }

        if (isNaN(monthlyIncome) || monthlyIncome <= 10){
            alert("Please enter a valid monthly income.")
            return;
        }

        if (isNaN(loanAmount) || loanTerm <= 0){
            alert("Please enter a valid loan term.")
        }


        //Calculates monthly payment using the formula
        const annualInterestRate = 0.045; // Example: 4.5%
        const r = annualInterestRate / 12; // Monthly Interest Rate
        const n = loanTerm * 12; // Total number of payments

        //Multiple variables declared to make the formula easy to implement
        //and avoid possible mathematical errors
        const numerator = (loanAmount * r * Math.pow(1 + r, n));
        const denominator = Math.pow(1 + r, n) - 1;
        const monthlyPayment = numerator / denominator;


        //Eligibility for the mortgage
        const threshold = 0.3 * monthlyIncome;
        const totalMonths = loanTerm * 12;
        const totalInterest = (monthlyPayment * totalMonths) - loanAmount;
        if (monthlyPayment <= threshold) {
            assessmentSection.innerHTML = `
            <div class="assessment-container">
                <h3 id="assessment-h3">Your assessment of the loan : <span id="approved">Approved</span></h3><br>

                <p>Your monthly payment is: <strong>£${monthlyPayment.toFixed(2)}</strong></p>
                <p>You will owe us in total:  <strong>£${(monthlyPayment*totalMonths).toFixed(2)}</strong></p>
                <p>Total interest on the loan: <strong>£${totalInterest.toFixed(2)}</strong></p>
                <p>Remaining income after expense:<strong>£${(monthlyIncome-monthlyPayment).toFixed(2)}</strong> </p>
                <p>Your remaining term time (in months): <strong>${totalMonths}</strong></p>
            </div>
            
            `;
        }
        else{
            assessmentSection.innerHTML = `
            <div class="assessment-container">
                <h3 id="assessment-h3">Your assessment of the loan : <span id="rejected">Rejected</span></h3><br><br>

                <p>Loan denied: Monthly payment exceeds 30% of your income.</p>
                <p>Your loan payments are: <strong>£${monthlyPayment.toFixed(2)}</strong> </p>
                <p>Your monthly income: <strong>£${monthlyIncome}</strong></p>
            </div>
            `;
        }
    })

});


//Contact us form validation 
function formValidation() {
    // Initialising all the inputs frrom the user
    const firstName = document.forms["contactForm"]["fName"].value; 
    const lastName = document.forms["contactForm"]["lName"].value;  
    const email = document.forms["contactForm"]["email"].value;
    const subject = document.forms["contactForm"]["subject"].value;
    const message = document.forms["contactForm"]["message"].value;


    //Checks to make sure nothing is empty
    if (!firstName || !lastName || !email || !message || !subject) {
        alert('Please fill in all required fields.');
        return false;
    }

    //Email patterns to validate if the input follows this pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert("Thank you, Your form has been submitted");
    return True
}
