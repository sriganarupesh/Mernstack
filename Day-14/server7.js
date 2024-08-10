var fs=require('fs');
fs.writeFile('apple.txt','could you understand or not! yes, white crows are flying', function(err){
	if (err) throw err;
	console.log('Updated!');
});