# Javascript

## Variables
A variable is a piece of information you store for later use:

```javascript

var myVariable = 'a piece of information';

```

to redefine a variable, you can just set it equal to another value:
```javascript

var myVariable = 'a piece of information';

myVariable = 'a new piece of information';

```

## Variable Types
There are several different variable types:

### Strings 
- Strings are pieces of text: `"strings"`
- You can combine multiple strings with the `+`: 
```javascript

"string" + "another" // outputs "stringanother"

"string" + " another" // outputs "string another"

``` 

- You can add to update an existing string with `+=` 
```javascript

var myVariable = "string";

myVariable += ' and another'; // outputs "string and another"


``` 


### Numbers
- Integers are whole numbers: `1`
- You can use basic arithmetic to combine numbers: (`*`, `/`, `-`, `+`)

Adding strings with numbers outputs a string:
```javascript

20 + "px" //outputs "20px"

``` 

### Booleans
`true` or `false`

### Arrays
Arrays are lists of variables: `['apple', 'orange', 'pear']` and are denoted with square brackets: `[]`.

To select a specific value of an array, you can call it by its index:
(arrays are 0-index based, meaning the first element is referenced with th number 0, the second element is referenced by 1, etc) 

```javascript

var myFruits = ['apple', 'orange', 'pear'];

myFruits[0] // outputs 'apple'
myFruits[1] // outputs 'orange'

myFruits[4] // outputs undefined


```

### Objects
Objects are collections of variables that use `keys` to store `values` and use curly brackets: `{}`.

```javascript

var myObject = {
	key : 'my value',
	anotherkey: ['my', 'array', 'of', 'values']
};

```

To call a specific value of an object, you reference its key:
```javascript

myObject.key // outputs 'my value'

myObject.anotherkey[0] // outputs 'my'

```


## Output
To view the contents of a variable in the browser, you can output it in the console:

```javascript

	var myVariable = 'hello!';

	console.log(myVariable);

```

## Conditionals

To evaluate variable relationships, you can use if statements:

```javascript

if(true){
	// do somethings
}else{
	// do something else
}


```

### Comparisons

You can compare variables in a variety of ways:

- equal in variable and content: `if( x === y)`
- equal in content: `if(x === y)`
- greater than: `if(x > y)`
- greater than and equal to: `if(x >= y)`
- less than: `if(x < y)`
- less than and equal to: `if(x <= y)`

Additionally, you can use multiple comparisons:

- must meet both conditions: `if(x === y && x === z)`
- must meet either condition: `if(x === y || x === z)`


You can also chain multiple if statements together:

```javascript

var myString = 'yes';

if(myString === 'yes'){

}else if(myString === 'maybe'){
	
}else{

}

```


## DOM Selection
The &ldquo;Document Object Model&rdquo; is a way of accessing the structure of an html element via Javascript. It&rsquo;s primary access point is the `document`, which you can use to select any part of your html (similar to CSS):

Select an element by Id and save it for later:

```javascript
	
var myElement = document.getElementById("myId");

```

Select the first matching element and save it for later:

```javascript
	
var myElement = document.querySelector("#myId");
var firstParagraph = document.querySelector("p");

```


Select all matching elements via class or element type:

```javascript
	
var myElements = document.querySelectorAll(".myClass");
var myParagraphs = document.querySelectorAll("#myId p");

```

To traverse a class of elements you can use the `forEach` method:

```javascript

var myParagraphs = document.querySelectorAll("#myId p");

myParagraphs.forEach(function(p){
	// p now can be used to reference EACH paragraph item
	console.log(p)

})

```


## DOM Manipulation

### Classes

To change the class associated with an element you can use the `classList` property:

- To add a class: `myElement.classList.add('myClass')`
- To remove a class: `myElement.classList.remove('myClass')`
- To check if a class exists: `myElement.classList.contains('myClass')` (returns true or false)

### Inline Style

To change the inline CSS of an element you may access that elements style property:

```javascript

var myElement = document.getElementById("myId");

myElement.style.backgroundColor = "red";

var green = 200;
var blue = 100;

myElement.style.color = "rgb(255," + 200 + " ," + 100 + ")";

```

## Intervals

Javascript also allows us to run actions with delay or on repeat:

### Delay (setTimeout)
Javascript uses milliseconds rather than seconds, so `1000` = 1 second.

```javascript

setTimeout(function(){
	console.log("this was delayed!")
}, 1000)

```

### Repeat (setInterval)
```javascript

setInterval(function(){
	console.log("this will repeat every second!")
}, 1000)

```

You can use the setInterval to update a variable outside of it:

```javascript

var myNumber = 0;

setInterval(function(){
	console.log(myNumber)
	myNumber = myNumber + 1;

}, 1000)

```


