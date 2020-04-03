# Javascript: Event Listeners

[Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) are a method to allow our Javascript to run functions based on certain interactions with the DOM (our HTML).

Event Listeners follow the general syntax of: 
```javascript

	
	target.addEventListener("event", function(e){
		 console.log(e) // where e stands for event
	});


```
You&rsquo;ll notice that we&rsquo;re using an anonymous function with a single argument: `e`. `e` stands for event, and gives us a bunch of information abou the action we just triggered.

A few important eventlisteners:
- `DOMContentLoaded` the HTML document has been completely loaded and parsed
- `click` triggers on click
- `mousedown`
- `mouseenter`
- `mouseleave`
- `mousemove` triggers on mouse move
- `mouseover` 
- `mouseout`
- `mouseup` triggers when a user releases a click
- `select` (when text is being selected)
- `keydown` when a key is pressed
- `keyup` when a key is lifted
- `scroll` when the document view or an element has been scrolled

### Examples

On Page Load:

```javascript

window.addEventListener('DOMContentLoaded', function(e){
    console.log('DOM fully loaded and parsed');
});

```


On Click:

```javascript
	
	var myButton = document.getElementById("myButton");

	
	myButton.addEventListener("click", function(e){
		 
		e.target.innerHTML = "this button has been clicked"
		e.target.disabled = true

	});


```

On Keydown (each key has its own numeric key):

```javascript
	
	var myButton = document.getElementById("myButton");

	
	myButton.addEventListener("keydown", function(e){

		if(e.keyCode === 70){
			alert("you pressed the letter F")
		}

	});


```

On Scroll:

```javascript
	
	window.addEventListener("scroll", function(e){

		var yPosition = window.scrollY;
		console.log(yPosition)

	});

```
To track an element&rsquo;s position in relation to the top of the browser window, use:

```javascript

var el = document.getElementById("myElement")

var viewportOffset = el.getBoundingClientRect();

var top = viewportOffset.top;
var left = viewportOffset.left;


```

