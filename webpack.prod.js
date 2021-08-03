const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
    return merge(common(env, argv), {
        entry: {
            button:"./exports/button",
            navbar:"./exports/navbar"
          },
        output: {
            path: `${__dirname}/dist/production/scripts`,
            publicPath: "./dist/production/scripts"
        },
        mode: 'production',
        target:"node",
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool:"eval-nosources-cheap-source-map",
        cache: true,
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                cache: true,
            })],
        },
        devtool: false,
        plugins: [
            new MiniCssExtractPlugin(),
            new webpack.SourceMapDevToolPlugin({
                filename: '[name].js.map',
                exclude: ['vendor.js']
            }),
            new WorkboxPlugin.GenerateSW({
                // these options encourage the ServiceWorkers to get in there fast
                // and not allow any straggling "old" SWs to hang around
                clientsClaim: true,
                skipWaiting: true,
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                limit: 8192,    
                            },
                        },
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "useBuiltIns": "entry",
                                        "corejs": "3.6.5"
                                    }
                                ]

                            ],
                            plugins: [
                                "transform-minify-booleans",
                                "babel-plugin-transform-remove-undefined",
                                "transform-remove-debugger",
                                "minify-mangle-names",
                                "transform-undefined-to-void",
                                "minify-constant-folding",
                                ["transform-remove-console", { "exclude": ["error"] }],
                                "@babel/plugin-proposal-class-properties",
                                ["minify-dead-code-elimination", {
                                    "optimizeRawSize": true
                                }]
                            ]
                        },
                    },
                },
            ]
        }
    });
}