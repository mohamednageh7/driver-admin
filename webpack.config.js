// entry -> output
// const path = require('path'); // access module code that built in node function
// console.log(path.join(__dirname,'public')); // this show my current project location

module.exports ={ 
    mode: 'none', // it use to define it is production or development mode
    entry: './src/app2.js',
    output:{
        //path:path.join(__dirname,'public') or 
        path: __dirname + '/public',     
        filename:'bundel.js' // i can change it to whatever i want 
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test:/\.s?css$/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: __dirname + '/public',
        historyApiFallback: true
    }
};