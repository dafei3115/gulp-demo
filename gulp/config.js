var src = 'src';
var dist = './dist';
var less=src+'/less/*.less';

//src目录配置
var srcjs=src+'/js';
var srcless=src+'/less';
var srcimages=src+ '/images';
var srcfontimages=src+'/fontimages';
var srchtml=src+'/html';
var srcvendor=src+'/vendor';

//dist目录配置
var distcss=dist+'/css';
var distjs=dist+'/js';
var disthtml=dist+'/html';
var distimages=dist+'/images';
var distvendor=dist+'/vendor';

module.exports = {
    src:src,
    dist:dist,
    srcjs:srcjs,
    srcless:srcless,
    srcimages:srcimages,
    srcfontimages:srcfontimages,
    srchtml:srchtml,
    srcvendor:srcvendor,
    distcss:distcss,
    distjs:distjs,
    disthtml:disthtml,
    distimages:distimages,
    distvendor:distvendor
};