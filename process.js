"use strict"
const os = require('os');
const fs = require('fs');
const EOL = os.EOL;
const csvProcessor = require('./index');
const getCSVPairsAsArrayOfLatLng = csvProcessor.getCSVPairsAsArrayOfLatLng;

let stopWithErrorMessage = function () {
	process.stderr.write("Please provide a file name, including the full (or relative) path to the file, as the only argument to this tool." + EOL);
	process.stderr.write("For example, run: node process.js /home/username/myfile.csv" + EOL);
	process.stderr.write("Only two-column csv files are expected. See the code for more info." + EOL);
	process.exit();
}

if (process.argv.length !== 3) {
	stopWithErrorMessage();
}

let file = process.argv[2];
try {
	if (!fs.existsSync(file)) {
		stopWithErrorMessage();
	}
} catch (err) {
	console.error(err)
}

// e.g. ~/Projects/Data/2018-tornado-by-start-location.csv
var promise = getCSVPairsAsArrayOfLatLng(file);
promise.then(function (results) {
	process.stdout.write(JSON.stringify(results));
}).catch(function (err) {
	process.stderr.write("There was an error" + EOL);
	process.stderr.write(err);
	process.stderr.write(EOL);
});