var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReactLEDDisplay.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactLEDDisplay.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,

                loader: 'babel-loader',
                query: {
                    presets: ['react', 'stage-1']
                }
            }
        ]
    }
}