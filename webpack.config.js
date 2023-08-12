const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: ['babel-loader', 'ts-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html',
		}),
		new CleanWebpackPlugin(),
	],
	optimization: { minimizer: [] },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		// webpack-dev-server에게 dist 디렉터리의 파일을 localhost:3000에 제공하도록 합니다.
		static: './dist',
		historyApiFallback: true,
		port: 3000,
		hot: true,
	},
};
