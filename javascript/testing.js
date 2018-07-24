//string inequalities

console.log("hello" < "hi");
console.log("hy2" < "hi");
console.log("2" < "hi");

//scope and hoisting

var a = 3;
foo();                        //hoisted function
console.log(a);

function foo() {
  a = 2;                      //hoisted variable
  console.log(a);
  var a;
}

//let keyword

if (true){
  var a = 2;
}

console.log(a);

function foo(){
  var a = 5;

}

//eval(...) dynamic scope

function foo(str){
  eval(str);
  console.log(b);
}

var b = 2;
foo("var b = 3");         //3
foo("");                  //2

//nested function scopes

function foo(){
  function bar(){
    console.log("hello");
  }
}


bar(); //error, can't find bar

//implicit binding

function foo(){
    console.log(this.a);
}

function bar(fn){
  var a = "bar";
  fn();
}
bar.a = "bar outside";

var a = "global";

bar(foo);
