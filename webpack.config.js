module.exports = {
    entry: './src/app.js',
    output: {
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {

        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env']
                }
            }

        }]
    }
};
