var fs=require('fs')
fs.unlink('apple.txt', function(err){
	if (err) throw err;
	console.log('File Deleted!')
});