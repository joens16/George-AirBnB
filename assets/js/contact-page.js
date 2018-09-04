$(document).ready(function () {
    $(".submit").click(function (event) {

        console.log("clicked")

        var name = $(".name").val()
        var email = $(".email").val()
        var message = $(".message").val()
        var statusElm = $(".status")
        statusElm.empty()

        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            statusElm.append("<div>Email is valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>Email is not valid</div>")
        }
        if (name.lenght > 2) {
            statusElm.append("<div>Name is valid</div>")
        } else
            event.preventDefault()
            statusElm.append("<div>Email is not valid</div>")
        if (message.lenght > 15) {
            statusElm.append("<div>Message is valid</div>")
        } else
            event.preventDefault()
            statusElm.append("<div>Message needs to be at least 15 characters</div>")
    })
})