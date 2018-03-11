const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hello.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.txt$/,
                use: 'raw-loader',
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                }
                // query: {
                //     name: ['[path][name].[ext]?[hash]', '[hash].[ext]'],
                //     limit: 10000,
                // },
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            'static/index.html'
        ]),
    ]
}

module.exports = config