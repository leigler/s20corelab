# Functions

Functions are a way to store a sequence of commands so you can use them later. They generally have some sort of input and produce some sort of output. 

### Anonymous
We have encounted *anonymous* functions before in `setInterval`s and `setTimeout`s. These are *anonymous* because we haven&rsquo;t saved them: 
```javascript

setInterval(function(){

	console.log("delayed by 1 second!")

}, 1000);


```

### Saved Functions
We can save functions in two ways. The first is like we would save a variable:

```javascript

var myFunction = function(){
	console.log("hello!")
}

```

Alternatively, we can save functions with the `functions` statement:

```javascript

function myFunction(){
	console.log("hello!")
}

```

In either scenario, the code inside that function won&rsquo;t run until we tell it to: 
```javascript

function myFunction(){
	console.log("hello!")
}

myFunction();

// we could even run it multiple times:
myFunction();
myFunction();
myFunction();

```

### Arguments
We can re-use functions with different values using parameters. Parameters are placeholder values that we can later substitute with custom values: 

```javascript

function myFunction(parameter, parameter2){

	var total = parameter + parameter2;

	console.log(total);

}

myFunction(2, 5);
myFunction(200, -0.123456);

```

### Return values
We can also use functions to output or return values:


```javascript

function myFunction(parameter, parameter2){

	var total = parameter + parameter2;

	return total;

}

var myFirstCombination = myFunction(2, 5);
var myDramaticCombination = myFunction(200, -0.123456);

console.log(myFirstCombination, myDramaticCombination)

```

### Localized Variables
When you define a variable inside a function, it becomes localized to that variable. This means that we cannot access that variable outside of its function:

```javascript

function myFunction(parameter, parameter2){

	var total = parameter + parameter2;

	console.log(total); // this will console

}

myFunction(2, 5);

console.log(total); // this will console an error because its outside of our function



```

