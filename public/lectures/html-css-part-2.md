# HTML/CSS Positioning

*The January 31st files can be downloaded [here](/files/jan-31.zip).*

## Box Model
Each html element has a margin, border, and padding:

<div
	style="
	width: 300px;
	height: 200px;
	background-color: red;
	margin: 20px;
	padding: 15px;
	border: solid 10px black;
	"
>	<code>width: 300px;</code><br><br>
	<code>height: 200px;</code><br><br>
	<code>margin: 20px;</code><br><br>
	<code>padding: 5px;</code><br><br>
	<code>border-width: 10px;</code>
</div>

<div
	style="
	width: 300px;
	height: 200px;
	background-color: red;
	margin: 20px;
	padding: 15px;
	border: solid 10px black;
	box-sizing: border-box;
	overflow: hidden;
	"
> 
	<code>width: 300px;</code><br><br>
	<code>height: 200px;</code><br><br>
	<code>box-sizing: border-box;</code><br><br>	
	<code>margin: 20px;</code><br><br>
	<code>padding: 5px;</code><br><br>
	<code>border-width: 10px;</code>
</div>

You can either use these to expand the element&rsquo;s size, or you may use `box-sizing: border-box;` to limit the height and width of an element.

## Units
CSS Units include: 
- `px` defines a pixel unit (not responsive)
- `%` defines the size in relation to its parent
- `vw` defines size in relation to browser width
- `vh` defines size in relation to browser height
- `rem` is a custom unit that is defined by the `font-size` in the `html` tag


## Relative
HTML positions all elements as `relative`, with almost all elements also displaying at the `block` level. This means they &ldquo;naturally&rdquo; flow in a column:
<br><br>
<div style="width: 100%; height: 40px; background-color: red;"></div>
<div style="width: 100%; height: 40px; background-color: green;"></div>
<div style="width: 100%; height: 40px; background-color: blue;"></div>
<br>
<div style="width: 100px; height: 40px; background-color: red;"></div>
<div style="width: 100px; height: 40px; background-color: green;"></div>
<div style="width: 100px; height: 40px; background-color: blue;"></div>
<br>When maintaining the `position: relative;`, elements can also be stacked side-by-side with `display: inline-block;`:
<br><br>
<div style="display:inline-block; width: 100px; height: 40px; background-color: red;"></div>
<div style="display:inline-block; width: 100px; height: 40px; background-color: green;"></div>
<div style="display:inline-block; width: 100px; height: 40px; background-color: blue;"></div>

<br>The tiny space between elements is due the the hard return in the html: 

```html

<div class="sideBySide"></div>
<div class="sideBySide"></div>
<div class="sideBySide"></div>

```

This can be solved by removing the space between the actual html elements: 

```html

<div class="sideBySide"></div
><div class="sideBySide"></div
><div class="sideBySide"></div>

```

<br>To produce: 
<br><br>
<div style="display:inline-block; width: 100px; height: 40px; background-color: red;"></div
	><div style="display:inline-block; width: 100px; height: 40px; background-color: green;"></div
	><div style="display:inline-block; width: 100px; height: 40px; background-color: blue;"></div
	>
<br>

<br>These elements can then take on a responsive percentage: 

<br>
<div style="display:inline-block; width: 33.33%; height: 40px; background-color: red;"></div
	><div style="display:inline-block; width: 33.33%; height: 40px; background-color: green;"></div
	><div style="display:inline-block; width: 33.33%; height: 40px; background-color: blue;"></div
	>
<br><br>

## Absolute

Elements can also be given positions of absolute (in which case they are removed from the relatively positioned cascade. These elements can now easily utilize the `left`, `top`, `right`, and `bottom` properties: 

<div style="
position: absolute;
width: 100px;
padding: 20px;
height: 100px;
left: 50%;
opacity: 0.5;
background-color: pink;
"><code>absolute</code><br><code>left: 50%;</code></div>

<br><br>`absolute` positioned elements are directly related to their parent element when their parent&rsquo;s position is clearly defined: 

<div
	style=" position: relative; width: 40%; height: 300px; background-color: gray;"
>
	<div style="position: absolute; top: 160px; left: 50px; height: 50px; padding: 20px; background-color: lightblue;">this is the child element</div>
</div>

<br>The css:
```css

	#parent{
		position: relative; 
		width: 40%; 
		height: 300px; 
		background-color: gray;
		overflow: hidden;
	}

	#child{
		position: absolute; 
		top: 160px; 
		left: 50px; 
		height: 50px; 
		padding: 20px; 
		background-color: lightblue;
	}
	

```
<br>
## Fixed

So far, `position: relative;` and `position: absolute;` how an element behaves, but not how it moves.

Position `fixed` allows us to place elements on the page permanently and keep them on the page despite scrolling past them. 

<div style=" position: fixed; right: 5%; top: 5%; width: 45%; height: 100px; background-color: red; padding: 5px;"><code>position:fixed;</code></div>
<br>

## Transform
CSS also allows you to manipulate how individual elements look regardless of their position via the `transform` property ([more here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)):
<br><br>
<div style="
	display: inline-block;
	width: 100px;
	height: 100px;
	background-color: red;

"></div>
<div style="
	display: inline-block;
	width: 100px;
	height: 100px;
	background-color: green;
	transform: rotate(35deg);

"></div>
<div style="
	display: inline-block;
	width: 100px;
	height: 100px;
	background-color: blue;
	transform: skew(35deg);

"></div>
