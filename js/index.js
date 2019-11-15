(function() {
    const viewheight = window.innerHeight
    const viewwidth = window.innerWidth

    // ios quick fix
    if (window.innerWidth <= 800 && window.innerHeight <= 600) {
        window.onresize = function(event) {
            document.querySelector('.container').style.height = viewheight + "px"
            document.querySelector('.container').style.width = viewwidth + "px"
        }
    }


    var myform = $("form#contactform");
    myform.submit(function(event) {
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "default_service";
        var template_id = "template_8Nk717f3";

        myform.find("button").text("word verzonden..");
        emailjs.sendForm(service_id, template_id, myform[0])
            .then(function() {
                alert("Verzonden!");
                $('input, textarea').val('')
                myform.find("button").text("Verzend");
            }, function(err) {
                alert("Het verzienden van de email is mislukt!\r\n Response:\n " + JSON.stringify(err));
                myform.find("button").text("Verzend");
            });
        return false;
    });
})();