
//console.log("Hello Webpack");


require(["./module2.js"],function(sum){
	return console.log("1+2="+sum(1,2));
	 
});