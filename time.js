// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

$w.onReady(function () {
	// Write your JavaScript here
	setInterval(dgClock, 1000);
	// To select an element by ID use: $w('#elementID')

	// Click 'Preview' to run your code
});

function dgClock() {
	const date = new Date();
	const digTime = date.toLocaleString('en-CA', {
    hour12: false,
  });
	//const digDate = date.toLocaleDateString();

	$w("#text21").text = "Current Time: " + digTime; //"#text21" is the id of the textbox.
}

