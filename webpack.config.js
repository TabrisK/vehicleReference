/**
 * Created by Helex on 2017/1/31.
 */


module.exports = {
    entry: "./app/app.js",
    devtool: "eval-source-map",
    output: {
        filename: "bundle.js",
        path: "./dist"

    },

    plugins: [],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.vue$/, loader: 'vue-loader'},
            {
                test: /\.scss$/, use: [
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    }
};