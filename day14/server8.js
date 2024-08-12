var fs=require('fs');
fs.writeFile('apple.txt','banana.txt', function(err){
	if (err) throw err;
	console.log('File Renamed!');
});