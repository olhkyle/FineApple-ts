const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

// this will update the process.env with environment variables in .env file
dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	mode: isProd ? 'production' : 'development',
	devtool: isProd ? 'hidden-source-map' : 'source-map',
	entry: './src/main.tsx',
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: isProd ? false : true,
				},
			},
			{
				test: /\.css?$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
		}),
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
	],
	optimization: { minimizer: [] },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devServer: {
		// webpack-dev-server에게 dist 디렉터리의 파일을 localhost:3000에 제공하도록 합니다.
		static: './dist',
		historyApiFallback: true,
		port: 3000,
		hot: true,
	},
};
