let webpack = require('webpack');
let path = require('path');
let glob = require('glob');
let HappyPack = require('happypack');
let os = require('os');
let happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
let CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');


module.exports = {
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, "www/static"),
        publicPath: '/static',
        filename: '[name].js'
    },
    module: {
        // 各种加载器，即让各种文件格式可用require引用
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /.js$/,
                loaders: [ 'happypack/loader?id=jsx' ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            },
            {
                test: /\.css$/, // Only .css files
                loaders: [ 'happypack/loader?id=cssx' ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '/components/img/cssInsideImg/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '/components/fonts/fontInsideCss/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },

        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer!less',
        }
    },
    babel: {
        presets: ['es2015', 'stage-1'],
        plugins: ['transform-runtime'],
        cacheDirectory: true
    },
    resolve: {
        //配置别名，在项目中可缩减引用路径
        extensions: ['', '.js', '.vue'],
        root: [ path.join( __dirname, './components/js/' ), path.join( __dirname, 'node_modules' ) ],
        alias: {
            vuePath: path.join(__dirname, "./node_modules/vue/dist/vue.min.js"),
            imgloadingPath: path.join(__dirname, "./components/js/imgLoading.js"),
            apiPath: path.join(__dirname, "./components/js/utils/api.js"),
            'jquery': path.resolve(__dirname, './components/js/jquery.2.1.4.min.js'),
        }
    },
    // debug: true,
    plugins: [
        // new CommonsChunkPlugin('static/js/common.js', getCommonArray()),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HappyPack({
            id:'jsx',
            loaders: [ 'babel?presets[]=es2015,cacheDirectory=true' ],
            threadPool: happyThreadPool,
            verbose: false , debug: false
        }),
        new HappyPack({
            id:'cssx',
            threadPool: happyThreadPool,
            loaders: [ 'style!css' ],
        }),



    ],
    cache: true
};
function getEntry() {
    let entry = {};
    glob.sync('./components/**/*.js').forEach(function (name) {
        // console.log(name);
        let n = 'components/' + name.slice(name.lastIndexOf('components/') + 11, name.length - 3);
        if (n !== 'js/util') {
            entry[n] = [path.resolve(__dirname, name.split('.js')[0])]
        }
        // console.log('key: ' + n + ' val: ' + entry[n])
    });

    return entry;
}
function getCommonArray() {
    let commonArr = [];
    for (let props in getEntry()) {
        commonArr.push(props);
    }
    return commonArr;
}
