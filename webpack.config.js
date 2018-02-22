
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname+'./app/index.html',
	filename:'index.html',
	inject: 'body'
});

module.exports={
   entry: './app/index.jsx',
	
   output: {
      path:'./app',
      filename: './index.js',
   },
	
   devServer: {
      inline: true,
      port: 3000,
      historyApiFallback: {
            index: './app/index.html'
      }//Use to direct the page to index html while refresh the app
   },
	
   module: {
      loaders:[
  			   {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel',
          
              query: {
                 presets: ['es2015', 'react']
              }
           },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=/fonts/[name].[ext]'
          }, {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=/fonts/[name].[ext]'
          }, {
            test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=/img/[name].[ext]'
          }, {
            test: /\.(jpe?g|png|gif|ico|svg)$/i,
            loader: 'file-loader?name=/img/[name].[ext]'
          }, {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }
			/*{test:/\.css$/,loader: 'style-loader'},
			{test: /\.css$/,loader: 'css-loader',query: {modules: true,localIdentName: '[name]__[local]___[hash:base64:5]'}}*/
		]
   }
};