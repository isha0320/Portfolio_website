
window.addEventListener('scroll',function(){
	var header= document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0);
			});
				
	function toggleMenu(){
		var menuToggle = document.querySelector('.toggle');
		var menu = document.querySelector('.menu');
		menuToggle.classList.toggle('active');
		menu.classList.toggle('active');
			}

	 var input= document.querySelectorAll("input");
var button = document.querySelector("button");
var msg = document.querySelector("textarea");
console.log(msg )
button.addEventListener("click",(e)=>{
e.preventDefault();
var Email=input[1].value;
var name = input[0].value;
let patEmail = /^[A-Za-z0-9._-]{3,20}@[A-Za-z0-9]{3,20}[.][A-Za-z.]{3,6}$/;
if(patEmail.test(Email) &&name!=" " && msg.value!=" "){
    console.log(name, Email);
    console.log(msg.value);
    sendEmail(); 
}   

else{
alert("Fill all te details!");
}

 document.querySelector(".contact-form").reset();
    return false;
})



function sendEmail(){
	Email.send({
    Host : "smtp.gmail.com",
    Username : "ishamahajan.9888@gmail.com",
    Password : "rfeamqxfgveqxtih",
    To : 'ishamahajan.9888@gmail.com',
    From : Email,
    Subject : "new Contact for Enquiry",
    Body : 'Name: ${name} <br> Email:${Email} <br> Message:${msg}'
}).then(
  message =>{
      console.log (message);
          if(message=='OK'){
          alert('Your mail has been send. Thank you for connecting.');
          }
          else{
            console.error (message);
            alert('There is error at sending message. ')
        }    
          
  }

);
}		
