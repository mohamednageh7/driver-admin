// entry -> output
// const path = require('path'); // access module code that built in node function
// console.log(path.join(__dirname,'public')); // this show my current project location
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => { 
    const isProduction = env === 'production';
    // const CSSEXTract = new MiniCssExtractPlugin('style.css');
    return {
    mode: 'none', // it use to define it is production or development mode
    entry: './src/app2.js',
    output:{
        //path:path.join(__dirname,'public') or 
        path: __dirname + '/public/dist',     
        filename:'bundel.js' // i can change it to whatever i want 
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/,
            use: [
                {
                    loader:MiniCssExtractPlugin.loader
                },
                {
                    loader:'css-loader',
                    options:{
                        sourceMap: true
                    }
                },
               {
                   loader: 'sass-loader',
                   options:{
                       sourceMap:true
                   }
               }
            ]
            // [
            //     'style-loader',
            //     'css-loader',
            //     'sass-loader'
            // ]           
        }]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    devtool: isProduction? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: __dirname + '/public',
        historyApiFallback: true,
        publicPath: '/dist/'
    }

    }
};