const path = require( 'path' );

const STATIC_CONTENT_PATH = path.join( __dirname, 'test/public' )

module.exports = {

    mode: 'development',
    entry: './test/src/index.js',
    output: {
        path: STATIC_CONTENT_PATH,
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: STATIC_CONTENT_PATH,
        compress: true,
        port: 5000,
    },
    module: {
        rules: [
        
            {
                test: /\.js[x]{0,1}$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'react', 'env' ]
                    }
                }
            },

            {
                test: /\.less$/,
                use: [ 
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            }
        ]
    }
};