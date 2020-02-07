# CSS Pseudo Classes

A complete list of Pseudo-classes can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes). The general syntax for css pseudo-classes includes the original selector and the defined pseudo-class: 


```css

selector:pseudo-class {
	property: value;
}

```

Loosely, we can divide css pseudo classes into two categories: Interactive and Logic-based.

### Interactive

#### Hover

```css

.myClass:hover {
	background-color: red;
}

```


#### Focus

```css

.myClass:focus {
	background-color: green;
}

```


#### Active

```css

.myClass:active {
	background-color: blue;
}

```

#### Visited

```css

.myClass:visited {
	color: yellow;
}

```


<style>
	.exampleSection{
		border: dotted #8A2BE2 1px;
		border-radius: 0.25rem;
		padding: 1rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		max-width: 60rem;
		box-sizing: border-box;
	}

	.exampleLink{
		display: inline-block;
		background-color: black;
		color: white;
		border-color: black;
		margin-top: 1rem;
		margin-bottom: 1rem;
		padding: 1rem;
	}

	.exampleLink:hover{
		background-color: red;
	}

	.exampleLink:focus{
		background-color: green;
	}

	.exampleLink:active{
		background-color: blue;
	}

	.exampleLink:visited{
		color: yellow;
	}

</style>

<a class="exampleLink" target="_blank" href="/lectures">Example Link</a>	


### Logic

#### First-of-type

```css

.myParagraphs:first-of-type {
	background-color: #8A2BE2;
}

```

#### nth-of-type()
selects a specific or repeating element:

```css

.myParagraphs:nth-of-type(even) {
	border: solid 2px black;
}

.myParagraphs:nth-of-type(5n) {
	border: dotted 4px red;
}

.myParagraphs:nth-of-type(2) {
	border: dashed 2px blue;
}

```

#### :not()

```css

.myParagraphs:not(#special){
	font-style: italic;
	font-family: Helvetica, Arial;
}

```

<style type="text/css">

.myParagraphs{
	width: 50%;
	margin-top: 1rem;
	text-indent: 0;
	padding: 0.25rem;
}

.myParagraphs:not(#special){
	font-style: italic;
	font-family: Helvetica, Arial;
}

.myParagraphs:first-of-type {
	background-color: #8A2BE2;
}
.myParagraphs:nth-of-type(even) {
	border: solid 2px black;
}

.myParagraphs:nth-of-type(5n) {
	border: dotted 4px red;
}

.myParagraphs:nth-of-type(2) {
	border: dashed 2px blue;
}
</style>

<div class="exampleSection">
	<p class="myParagraphs" >First paragraph</p>
	<p class="myParagraphs" id="special">Second paragraph</p>
	<p class="myParagraphs" >Third paragraph</p>
	<p class="myParagraphs" >Fourth paragraph</p>
	<p class="myParagraphs" >Fifth paragraph</p>
	<p class="myParagraphs" >Sixth paragraph</p>
</div>

