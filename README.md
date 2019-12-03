## Script to get lat/lng coordinates from csv file into JSON ##

`Usage: node process.js <path-to-file>`

You have a CSV (comma-separated variables) file with two columns, and rows separated by new lines.

As an example, see the attached latlng.csv:

```
37.4463,-78.0012
32.1196,-96.3186
35.0823,-94.2695
35.3909,-93.9501
37.0474,-93.8293
30.78,-81.55
38.1813,-86.8863
38.0935,-86.0869
```

Use `process.js` to split up the CSV file into latitude and longitude pairs and stored into an Array. The output is JSON formatted, like this:

```
[{"lat":"37.4463","lng":"-78.0012"},
{"lat":"32.1196","lng":"-96.3186"},
{"lat":"35.0823","lng":"-94.2695"},
{"lat":"35.3909","lng":"-93.9501"},
{"lat":"37.0474","lng":"-93.8293"},
{"lat":"30.78","lng":"-81.55"},
{"lat":"38.1813","lng":"-86.8863"},
{"lat":"38.0935","lng":"-86.0869"}]
```

There are no line separators in the output, however - you will have to add that yourself, if you want it.