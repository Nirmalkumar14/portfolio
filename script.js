// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
             
function sendemail(){

	var email=document.getElementById("email").value;
	// var to_name=document.getElementById("name").value;
	var message=document.getElementById("message").value;

	var templateParams = {
    email: email,
  //  to_name:name,
		message: message
      };

      emailjs.send('service_7u7zi4b', 'template_9cwynni', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
  })

     
}
  