const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    devtool:"inline-source-map",
    target:"node",
    entry:path.resolve(__dirname,"/src/ssr/SsrApp.tsx"),
    resolve:{
        extensions:[".tsx",".ts",".js"]
    },

    modules:{
        rules:[
            {
                test:/\.jsx?$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            [
                                "@babel/preset-env",
                                {
                                    targets:"defaults",
                                },
                            ],
                            "@babel/preset-react",
                        ],
                    },
                },
            },
            {
                test:/\.test?$/,
                use:'ts-loader'
            },
            {
                test:/\.s[ac]ss?$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            },
            {
                test:/\.md$/,
                type:"asset/resource",
            },
        ]
    },
    output:{
        clean:true,
        publicPath:"/",
        path:path.resolve(__dirname,"dist/ssr"),
        library:{
            type:"commonjs2",
        },
        globalObject:"this",
    },
    plugnis:[
        new MiniCssExtractPlugin({
            filename:"[name].css"
        })
    ],
    externals:{
        react:"react"
    }
}