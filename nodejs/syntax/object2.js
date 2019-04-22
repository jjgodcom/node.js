var f = function(){
    console.log("B");
    console.log("1");
}

f();

var a = [f];
a[0]();

var o = {
    func:f
}
o.func();