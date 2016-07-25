var path=require("path");

module.exports = {
	entry: path.join(__dirname, 'src/entry.js'),
	output: {
		path: path.join(__dirname, 'out'),
		publicPath: "./out/",
		filename: 'bundle.js'
	},
	// 新添加的module属性
	module: {
		loaders: [
			{test: /\.js$/, loader: "babel"},
			{test: /\.css$/, loader: "style!css"},
			{test: /\.(jpg|png)$/, loader: "url?limit=8192"},
			{test: /\.scss$/, loader: "style!css!sass"}
		]
	}
};