module.exports = {

    configureWebpack: {
        resolve: {
            // 为路径设置别名
            alias :{
                // '@' 表示src（已由内部配置别名）
            }
        }
    },

    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */ 
    // 注：hash模式下使用 "./" ,history模式下使用 "/"
    publicPath: process.env.NODE_ENV === 'development' ? '/public/' : '/',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: 'assets',
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 3000,
        https: false,
        hotOnly: true,
        disableHostCheck: true
    },
    css: {
        modules: false, // 是否开启支持 foo.module.css 样式
        extract: false, // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        sourceMap: false, // 是否构建样式地图，false 将提高构建速度
        loaderOptions: { // css预设器配置项
            sass: {},
            css: {},
            postcss: {}
        }
    },
}