var fs = require('fs');

options = {encoding: 'utf8'};
fs.readFile('text.txt', options, function(err, data){
	if(err){
	  console.log('File Read error!');
	} else {
	  console.log(data.match(/x/gi).length + ' X count')
	}
})


