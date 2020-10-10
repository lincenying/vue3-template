module.exports = {
    lintOnSave: 'warning',
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html'
        }
    },
    devServer: {
        port: 6006,
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'https://cnodejs.org',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
        historyApiFallback: {
            rewrites: [{ from: /^\/$/, to: '/index.html' }]
        }
    },
    productionSourceMap: false,
    filenameHashing: false,
    css: {
        loaderOptions: {}
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    chainWebpack: () => {},
    assetsDir: 'adminweb',
    outputDir: 'build'
}
