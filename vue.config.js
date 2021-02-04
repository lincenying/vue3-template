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
        port: 8061,
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://php.mmxiaowu.com',
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
    chainWebpack: () => {}
}
