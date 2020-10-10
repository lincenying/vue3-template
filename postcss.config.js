const pxtorem = require('postcss-pxtorem')

module.exports = ({ file }) => {
    let remUnit = 100
    if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
        remUnit = 50
    }
    return {
        plugins: [
            pxtorem({
                rootValue: remUnit,
                propList: ['*'],
                selectorBlackList: ['van-circle__layer']
            })
        ]
    }
}
