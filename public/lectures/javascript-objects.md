# Javascript: Objects and Asynchronous Loading

## Javascript Objects

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


## Asynchronous Calls

Javascript can be used to dynamically call data into your website. This is increasingly used to change the content within a page without reloading the entire page. 

Most of Javascript is *synchronous*—this means that any code we write will be run one operation at a time. 

Take the example below (which is *synchronous*), this works because our function `addition` runs for our variable `result` when we call it. Our variable `newResult` only runs once `result` is finished:

```javascript
function addition(num1, num2){
	return num1 + num2;
}

var myNumber = 2;
var otherNumber = 5;

var result = addition(myNumber, otherNumber);
var newResult = addition(result, myNumber);


```

<br>For most of our actions, this is works really well. But once we start asking for additional information from our server or an external data source (like an API), we will have to wait until we get our data before we can start another action. 

<br>This is where *asynchronous* actions come into play:

## Fetch

To get information from our server (or from an API) in an asynchronous manner we can use Javascript&rsquo;s `fetch`:

```javascript
fetch('yoururl')
.then(function(response){ 
	// convert your response into a json file
	return response.json() 
})
.then(function(responseJson){ 
	// do something with your response
	console.log(responseJson)

 })

```

The `fetch` method can then be chained to the `then` method, which forces synchronous steps to our data. To pass our data from one `then` to another, we use the `return` statement.

In the example above, we are converting our response to a `json()` format so we can access it like we would a Javascript object. If you have html you&rsquo;d like to place into your document, you could use the `text()` method:

```javascript
fetch('yoururl')
.then(function(response){ 
	// convert your response into a json file
	return response.text() 
})
.then(function(responseText){ 
	// add new html to your document
	var container = document.getElementById("container")

	container.insertAdjacentHTML('beforeend', responseText)

 })

```

### Fetch within a function

If we want to use the `fetch` method within a function, we have two strategies: 

#### 1. Return Fetch
We can return our fetched content within a regular function on its own:
```javascript

function myInfo(myUrl){
	return fetch(myUrl)
	.then(function(response){ 
	// convert your response into a json file
	return response.json() 
	})
	.then(function(responseJson){ 
	// do something with your response
	console.log(responseJson)

	})
}

myInfo("my/url/info.json")

```

#### 2. Async Function
Alternatively, we can run an asynchronous function:

```javascript

async function gettingInfo(myUrl){
	
	console.log("loading...")

	var results = await myInfo(myUrl);

	console.log(results) // only happens once our fetch has resolved
}

gettingInfo("my/url/info.json")

```


### Example
Getting our class lecture links:

```javascript
	
fetch("https://raw.githubusercontent.com/leigler/icd/master/public/files/icd.json")
.then(function(response){return response.json()})
.then(function(responseJson){

	console.log(responseJson)

})

```


```javascript
	
fetch("https://raw.githubusercontent.com/leigler/icd/master/public/files/icd-list.html")
.then(function(response){return response.text()})
.then(function(responseHtml){

	console.log(responseHtml)

})

```