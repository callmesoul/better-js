const path={

}
module.exports = {
    entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件,
    output: {
        path: __dirname + "/test/public",//打包后的文件存放的地方
        filename: "frontend-sniper.js"//打包后输出文件的文件名
    },
    module:{
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    }
}