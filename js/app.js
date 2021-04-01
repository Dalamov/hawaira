const firstNameField = 'fname';
const lastNameField = 'lname';
const emailField = 'email';
const msgField = 'message';
var errors = [];

$(document).ready(function(){

   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});

function validateForm() {
   var firstName = document.getElementById(firstNameField).value;
   var lastName = document.getElementById(lastNameField).value;
   var email = document.getElementById(emailField).value;
   var message = document.getElementById(msgField).value;

   validateNames(firstName, lastName, message);
   validateEmail(email);
 
   if (errors.length > 0) {
      errorMessage = '';

      errors.forEach(error => {
         errorMessage = errorMessage + error + '\n'
      });

      alert("Invalid input on the following field(s): \n" + errorMessage)
   }
}

function validateNames(firstName, lastName, message) {
   //define regex
   var re = new RegExp("^[a-zA-Z0-9 .-]+$");

   if (!re.test(firstName)) {
      errors.push('first name');
   }

   if (!re.test(lastName)) {
      errors.push('last name');
   }

   if (!re.test(message)) {
      errors.push('message');
   } 
}

function validateEmail(email) {
   var re = new RegExp ("^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$");
      
   if (!re.test(email)) {
      errors.push('email');
   } 
}

