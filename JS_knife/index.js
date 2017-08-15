// js 去掉字符串前后空格
// zepto
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '')
}
// jquery 版本
function trim(str){   
    return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');   
}