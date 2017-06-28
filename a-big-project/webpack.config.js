let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        index:'./app/index.js'
    },  //入口
    output:{                   //出口
        filename:'bundle.js',//打包后的文件目录
        path:path.resolve('dist')
    },
    module:{
        rules:[  //规则
            {test:/\.js$/,loader:'babel-loader',exclude:/node_module/},
            {test:/\.less$/,loader:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins:[//插件
        new htmlWebpackPlugin({
            template:"./app/index.html"
        })
    ],
    devtool:'source-map',  //错误时可以提示源码错误
    devServer:{
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
};
