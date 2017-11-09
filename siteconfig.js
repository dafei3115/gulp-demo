

//站点静态资源目录配置  对应变量[@sitepath]

//开发环境配置
var devSiteConfigs={
    sitePath:{'oldString':'[@sitepath]','newString':'/'},
};


//生产环境配置
var opsSiteConfigs= {
    sitePath: {'oldString': '[@sitepath]', 'newString': '/skin/20170321/'},
};


module.exports = {
    devSiteConfigs:devSiteConfigs,
    opsSiteConfigs:opsSiteConfigs,
};