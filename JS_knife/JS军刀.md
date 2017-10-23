```javascript
// ��̬����JS�ļ�
loadScript('test.js')

<!-- �򻯰� -->
function loadScript(url) {

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

<!-- �ص����� -->
[The best way to load external JavaScript](https://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/)
function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);

}

```

```javascript
// js ȥ���ַ���ǰ��ո�
// zepto �汾
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '')
}
// jquery �汾
function trim(str){   
    return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');   
}
```

```javascript
// ��ȡURL����
function getUrlParam(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1)
        return undefined;
    return decodeURIComponent(result[1]);
}
```


```javascript
// �ж�����
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```






