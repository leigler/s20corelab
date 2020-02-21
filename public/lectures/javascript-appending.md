# Javascript Appending to the DOM

With javascript you can dynamically add new `html` elements and content to the DOM. While there are several ways to do this, the easiest is as follows:

## New Content
To add new content to an existing element on your webpage, you can use `innerHTML`.

You will have to first retrieve the element you want to change:

```javascript

	var myElement = document.getElementById("myTitle");

```

You can then either check or rewrite its content. 

### Checking Existing Content

```javascript

	var myElement = document.getElementById("myTitle");

	console.log(myElement.innerHTML);

```


### Overwriting Content

To overwrite content, just reset the `innerHTML` equal to your new content:

```javascript

	var myElement = document.getElementById("myTitle");

	myElement.innerHTML = "A Brand New Title";

```


### Adding Content
To add content to the end of a title, just use the `+=` modifier:

```javascript

	var myElement = document.getElementById("myTitle");

	myElement.innerHTML += " ... or: How I Learned to Stop Worrying and Love the Bomb";

```


### Adding content to the beginning

To add content to the beginning of a string:
- first: you will need to save the original content 
- second: get the string of your new content
- third: add your original content to your new content
- finally: set your `innerHTML` equal to your new string

```javascript

	var myElement = document.getElementById("myTitle");
	var prelude = 'Dr. Strangelove';
	var originalTitle = myElement.innerHTML;

	myElement.innerHTML = preTitle + originalTitle;

```


## New Elements

To append (i.e. add) new content to your DOM we will use a method called `insertAdjacentHTML` with a new way of creating strings called *template literals*.

### Template Literals

Template literals use the backticks (\` \`) to denote the beginning and end of a sentence: <code>`your string`</code>.

The big advantage in contrast to normal quotes (`"your string"`) is that backticks can be multi-line, meaning you can write html directly in your javascript!

<pre>
	<code>var myString = `

		&#60;h1>This is an h1&#60;/h1>
		&#60;img src="path/to/image.jpg">

`;</code>
</pre>

Additionally, you can easily pass in multiple variables using the command: `${}`:

<pre>
	<code>var myPath = "path/to/image.jpg";

var myString = `

	&#60;h1>This is an h1&#60;/h1>
	&#60;img src="${myPath}">

`;</code>
</pre>

### InsertAdjacentHTML

You will need a target element<sup>1</sup>, a position<sup>2</sup>, and your content<sup>3</sup>:

#### 1. Target
```javascript

var myElement = document.querySelector("myElement");
```


#### 2. Position
The position specifies where in relation to your element you want to place the new HTMl. 
- `beforebegin` (outside/before the start of your element)
- `afterbegin` (right after the opening tag of your element)
- `beforeend` (right before teh closing tag of your element)
- `afterend` (outside/right after the end of your element)

```javascript

var myElement = document.querySelector("myElement");


myElement.insertAdjacentHTML('beforeend', `your content`);

```

#### 3. Content
This is where you get to place your aforementioned template literal:

```javascript

var myElement = document.querySelector("myElement");

var someImportantChangingNumber = 2;
var someTitle = 'My Second Blog Post';

myElement.insertAdjacentHTML('beforeend', `

	<div class="post" id="element-number-${someImportantChangingNumber}">
		<h1 style="font-size:${someImportantChangingNumber*2}px;">${someTitle}</h1>
	</div>

`);

```

## Extra 
You can even use this in a for loop:

```javascript

var myElement = document.querySelector("myElement");

var someTitle = 'My Blog Post';

for (var i = 0; i < 10; i++) {
	myElement.insertAdjacentHTML('beforeend', `

		<div class="post" id="element-number-${i}">
			<h1 style="font-size:${i*2}px;">${i}. ${someTitle}</h1>
		</div>

	`);	

}

```


