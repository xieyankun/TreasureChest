
var codeData = [
    {name: 'A', intervaltime: 1000},
    {name: 'B', intervaltime: 1000},
    {name: 'C', intervaltime: 1500},
    {name: 'D', intervaltime: 2000}
]

var starttime = 0;

for(var i=0; i<codeData.length; i++){
    starttime += codeData[i].intervaltime;
    setTimeout(print(codeData[i].name), starttime)
    console.log(starttime)
}

function print(name){
    // console.log(name)
    return function(){
        console.log(name)
    }
}
理解此题的关键在于，setTimeout延迟了函数的回调，使回调函数会在循环结束时才执行，因此i输出的结果是4。
这个我给出的一种解法便于后面我们理解闭包的概念。这里面就存在闭包，在print函数里我们return了一个函数。



// var starttime = 0;
// for(var i=0; i<codeData.length; i++){
//     starttime += codeData[i].intervaltime;
//     setTimeout(function(){
//         console.log(name)
//     }, starttime)
// }



for(var i=0; i < 10; i++){
    setTimeout(function(){
        console.log(i)
    }, 0)
}


for(var i=0; i<10; i++){
    (function( i ) {
        setTimeout(function(){
            console.log(i)
        }, 0)
    })(i)
}

for(var i=0; i<10; i++){
    setTimeout(print(i), 0)
}
function print(name){
    return function(){
        console.log(name)
    }
}

for (var i = 0; i < 10; i++) {
      setTimeout((function(i) {
          console.log(i);
      })(i),1000)
} 

for(var i=0; i<10; i++){
    setTimeout(function(){
        var name = i
        return function(){
            console.log(name)
        }
    }(), 0)
}



