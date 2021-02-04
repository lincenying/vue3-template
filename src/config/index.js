const config = {}

if (process.env.VUE_APP_ENV === 'production') {
    // =====正式环境=====
    config.apiUrl = '/api/'
    config.webUrl = 'https://gank.io'
    config.qnUrl = 'https://media.sammu.top'
} else if (process.env.VUE_APP_ENV === 'pre-release') {
    // =====预发布环境=====
    config.apiUrl = '/api/'
    config.webUrl = 'https://gank.io'
    config.qnUrl = 'https://media.sammu.top'
} else if (process.env.VUE_APP_ENV === 'test') {
    // =====本地测试环境=====
    config.apiUrl = '/api/'
    config.webUrl = 'https://gank.io'
    config.qnUrl = 'https://media.sammu.top'
} else {
    // =====开发环境=====
    config.apiUrl = '/api/'
    config.webUrl = 'https://gank.io'
    config.qnUrl = 'https://media.sammu.top'
}

export default config
