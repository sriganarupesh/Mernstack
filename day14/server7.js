var fs=require('fs');
fs.writeFile('apple.txt','cake bake make!', function(err){
	if (err) throw err;
	console.log('updated!');
});