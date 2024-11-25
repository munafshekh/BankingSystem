// Select the menu toggle button and navigation links
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle the 'show' class on the nav-links when the menu button is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});



/* Initialising variables and I have specifically used let because it allows
 to control the scope and it cannot be re declared.*/
let accord = document.getElementsByClassName("accordian");
let i;

/* this loop checks if the button is pressed then it shows the panel (Specific 
to FAQs) */
for (i=0; i < accord.length; i++) {
    accord[i].addEventListener("click", function(){
        this.classList.toggle("active")
        
        var pan = this.nextElementSibling;
        if (pan.style.display === "block") {
            pan.style.display = 'none';
        }
        else{
            pan.style.display = 'block';
        }
    
    });
}

/* When logo in the header is clicked this function will be called and it'll redirect it
 Home page. Justification - Reduces extra code that may need to be written in all
pages*/
function logo_clicked() {
    window.location.href = "home.html";
}