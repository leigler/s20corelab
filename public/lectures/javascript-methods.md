# Javascript Objects & Methods

## Primer

### What is an object?
In Javascript, almost anything can be an object. Essentially though, and object is a collection of properties. These properties can be values (like a `string` or a `number`) , or they can be functions (i.e. actions).

Javascript already has a lot of pre-built objects. One in particular, that we&rsquo;ve already used:

- `document`

### What is a method?
A method is an *action* (function) that you can perform on an object. Later in the semester will will look at writing our own methods and functions, but Javascript has a lot of methods that we can already use.

We&rsquo;ve already used some (both on our `document` object and on elements (...which are also objects)):

- `getElementById()`
- `querySelector()`
- `querySelectorAll()`
- `innerHTML`
- `length`

## Important Javascript Objects and Methods

### Number
`parseInt()` returns an integer from a string so `'2010'` can be used as `2010` (i.e. using `+`, `-`, `*`, `/`)

```javascript
	console.log(parseInt('2010') + 2); // outputs 2012

```

- `parseFloat()` returns a float from a string so `'1.2345'` can be used as `1.2345` (i.e. using `+`, `-`, `*`, `/`)

```javascript
	console.log(parseFloat('1.2345') + 2); // outputs 2.2345

```

### Math
The [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object takes care of all of our difficult math equations:

- `Math.PI`  returns `3.14...`
- `Math.sin(x)` can be used for sinusoidal equations
- `Math.tan(x)`
- `Math.cos(x)`

Additionally we have rounding:

- `Math.round(x)` rounds up or down to the nearest integer ( `1.1` = `1` and `1.7` = `2`) 
- `Math.floor(x)` rounds down to the nearest integer ( `1.7` = `1`)
- `Math.ceil(x)` rounds up to the nearest integer ( `1.1` = `2`)

And random:
- `Math.random()` gives you a random number between 0 and 1.

To get a random number between `0` and `x` you can just multiply:

```javascript

Math.random()*10 // outputs a number between 0 and 10 (like 9.234)
Math.random()*55 // outputs a number between 0 and 55

Math.round(Math.random()*42) // outputs an integer between 0 and 42 (like 31)

```

### Date
The [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object produces a long number that represents the milliseconds from 1 January 1970 UTC (Universal Time Coordinated).

To get the current time (in UTC), you can use the `Date.now()` method:

```javascript

var now = Date.now();

```

To use the Date object more practically, you will have to make an instance<sup>\*</sup> of the object.

<br>\**an instance is a specific version of an object assigned to a variable. In this case it is a specific Date.*

To set an instance you need to use the `new` operator:

```javascript

var newDate = new Date();

```

You can then extract a bunch of information about this date:

```javascript

var myDate = new Date(); // empty gets current time of your computer

console.log(myDate.getDate(), 'day of month, 0-6') // day
console.log(myDate.getDay(), 'day of week, 0-6') // day of week
console.log(myDate.getHours(), 'hours, 0-23') // 0-23
console.log(myDate.getMinutes(), 'minutes 0-23') // 0-23
console.log(myDate.getMilliseconds(), 'milliseconds') // 0-24

console.log(myDate.getMonth(), 'month on 0-11 scale')
console.log(myDate.getFullYear(), 'year') // full year
console.log(myDate.getTimezoneOffset(), 'timezone offset in minutes')


```

If you have a specific time you want to base your calculations on, you can also define that time when setting your date instance. 

The example below sets the same date 4 different ways:
```javascript

let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)
let birthday = new Date(1995, 11, 17, 3, 24, 0)

```











