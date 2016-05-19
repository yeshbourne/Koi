module.exports = {
    entry: './src/koi.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'koi.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};
