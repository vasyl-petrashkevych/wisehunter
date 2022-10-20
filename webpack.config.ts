// Dependencies
// @ts-ignore
import path from 'path'
import {Configuration} from 'webpack'

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Environment
const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig: Configuration = {
    devtool: !isProduction ? 'source-map' : false,
    target: 'web',
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'admin/js/[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            },
            {
                test: /\.(scss|css|less)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ]
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             default: false,
    //             commons: {
    //                 test: /node_modules/,
    //                 name: 'vendor',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // },
    externals: {
        '@wordpress/blocks': 'wp.blocks',
        '@wordpress/block-editor': 'wp.blockEditor',
        '@wordpress/components': 'wp.components'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "admin/styles/[name].css",
            chunkFilename: "admin/styles/[id].css",
        })
    ]

}
export default webpackConfig