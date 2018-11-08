// $("#contact-form").on("submit", function(event) {
//     event.preventDefault(); // prevent reload
    
//     var formData = new FormData(this);
//     formData.append('service_id', 'gmail');
//     formData.append('template_id', 'contact_from');
//     formData.append('user_id', 'user_s9tnHYVlgrwyaTf71cSIz');
 
//     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//         type: 'POST',
//         data: formData,
//         contentType: false, // auto-detection
//         processData: false // no need to parse formData to string
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// });

// var data = {
//     service_id: 'gmail',
//     template_id: 'contact_form',
//     user_id: 'user_s9tnHYVlgrwyaTf71cSIz',
//     template_params: {
//         'username': 'James',
//         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//     }
// };
 
// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });

// $(document).ready(function () {
//     $(".submit").click(function (event) {

//         console.log("clicked")

//         var name = $(".name").val()
//         var email = $(".email").val()
//         var message = $(".message").val()
//         var statusElm = $(".status")
//         statusElm.empty()

//         if (email.length > 5 && email.includes("@") && email.includes(".")) {
//             statusElm.append("<div>Email is valid</div>")
//         } else {
//             event.preventDefault()
//             statusElm.append("<div>Email is not valid</div>")
//         }
//         if (name.lenght > 2) {
//             statusElm.append("<div>Name is valid</div>")
//         } else
//             event.preventDefault()
//             statusElm.append("<div>Email is not valid</div>")
//         if (message.lenght > 15) {
//             statusElm.append("<div>Message is valid</div>")
//         } else
//             event.preventDefault()
//             statusElm.append("<div>Message needs to be at least 15 characters</div>")
//     });
// })