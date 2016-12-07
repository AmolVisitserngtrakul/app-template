const gutils = require('gulp-util');

module.exports = {
    production: gutils.env.production || process.env.NODE_ENV === 'production',
    app: {
        src: 'src/scripts',
        dir: 'www',
        build: 'build/js',
        dist: 'www/js',
        main: 'index.ts',
        bundle: 'index.js',
        plist: 'template.plist'
    },
    css: {
        src: 'src/assets/sass',
        dist: 'www/css',
        output: 'main.css'
    },
    fonts: {
        src: [
            'node_modules/bootstrap-sass/assets/fonts/**',
            'src/assets/fonts/**'
        ],
        dist: 'www/fonts'
    },
    images: {
        src: [
            'src/assets/images/**'
        ],
        dist: 'www/img'
    },
    json:{
        src: [
            'src/assets/json/**'
        ],
        dist: 'www/json'
    },
    envUrlReplacePath: {
        index: {
            src: 'src/index.html',
            keyword: '__js'
        }
    },
    jsPath:'js/index.js'
}