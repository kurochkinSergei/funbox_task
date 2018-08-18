const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
});

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: ['./src/index.js', './src/css/index.scss'],
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: 'bundle.js',
        publicPath: '/dist/assets',
        sourceMapFilename: 'bundle.map',
    },
    resolve: {
        extensions: ['.js'],
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'babel-preset-stage-0', 'react'],
                },
            }],
        },
        {
            test: /\.scss$/,
            loader: extractSass.extract({
                use: [
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }],
                fallback: 'style-loader',
            }),
        },
        ],
    },
    plugins: [
        extractSass,
    ],
};
