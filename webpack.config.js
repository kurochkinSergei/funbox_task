const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
});

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: ['./src/index.jsx', './src/css/index.scss'],
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: 'bundle.js',
        publicPath: '/dist/assets',
        sourceMapFilename: 'bundle.map',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                },
            }],
        },
        {
            test: /\.scss$/,
            loader: extractSass.extract({
                use: [
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version'],
                                }),
                            ],
                            sourceMap: true,
                        },
                    },
                    { loader: 'sass-loader' }],
                fallback: 'style-loader',
            }),
        },
        {
            test: /\.(png|woff|woff2|otf|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000',
        },
        ],
    },
    plugins: [
        extractSass,
    ],
};
