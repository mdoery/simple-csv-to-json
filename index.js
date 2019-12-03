"use strict"
const fs = require('fs');

/**
 * Given an input file name, assumed to contain a list of latitude,longitude
 * decimals separated by newlines, returns the pairs as an array of Objects
 * with lat, long properties -
 * like [ { "lat" : 37.4463, "long" : -78.0012 }, ... ]
 */
var getCSVPairsAsArrayOfLatLng = function(filename) {
	return new Promise(function(resolve, reject) {
		var rows = [];
		fs.readFile(filename, 'utf8', function(err, content) {
			if (err) {
				console.log(err);
				reject(err);
			} else {
				rows = content.split(/\r?\n/);
				let results = new Array();
				rows.forEach(function (item) {
					let latlng = item.split(",");
					if (latlng[0] && latlng[1]) {
						results.push({ lat: latlng[0], lng: latlng[1] });
					}
				});
				resolve(results);
			}
		});
	});
}

if (typeof module !== 'undefined' && module.exports !== null) {
	exports.getCSVPairsAsArrayOfLatLng = getCSVPairsAsArrayOfLatLng;
}