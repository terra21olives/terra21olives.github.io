var interacted = false;
addEventListener('mousemove', () => interacted = true );
addEventListener('keypress', () => interacted = true );

var timeout = 25;
var timer = setTimeout( function () {
    timer = null;
}, timeout * 1000);

var query = document.querySelector('form').getAttribute('action');
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (interacted === false) {
        // no keyboard or mouse interaction was detected, so any data present must have been filled out programmatically
        alert("This form was submitted without keyboard or mouse interaction, which is rather suspicious!");
        return;
    }

    if (timer !== null) {
        // the timer has not yet run out, this was submitted so rapidly that it's likely a bot
        alert(`This form was submitted so rapidly that it made you look like a bot! Please try again after {timeout} seconds.`);
        return;
    }

    fetch('https://formspree.io/f/mvolqqpd', {
        method: 'POST',
        body: new URLSearchParams(new FormData(event.target))
    }).then(this.reset.bind(this));

    document.getElementById("submitButton").value = "Success";
});
