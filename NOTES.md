## Function Declaration
- example:
```js
function razzleDeclaration() {
  console.log("Razzled!"); 
}
```

- `razzle` is a POINTER to a function stored in global memory
- add `()` to call/invoke/execute the pointer, e.g.: `razzle();`
- you can write declarations AFTER a function has been called

### Hoisting
- JS's ability to call a functionm before its in the code is called *hoisting*
- hoisting only works with function declarations


## Function Expression
- example:
```js 
let razzleExpression = function() {
  console.log("Yet more razzle!");
}
```

- Chrome symbolizes *frozen* work with a special `f` character
- `razzleExpression` is a pointer to a stored block of work
- function expressions are not hoisted