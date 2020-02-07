# CSS: Flexbox
In addition to `display: block;` and `display: inline-block;`, css offers another key organizational style: `display: flex;`. Otherwise known as *flexbox*, this `display` type was introduced to expand the limits of css layouts. Taken from [mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox):

> The following simple layout requirements are either difficult or impossible to achieve with such tools, in any kind of convenient, flexible way:

> - Vertically centering a block of content inside its parent.
> - Making all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
> - Making all columns in a multiple column layout adopt the same height even if they contain a different amount of content.

Unlike `block` and `inline-block`, `flex` (and `inline-flex`) have a direct effect on their children elements. This means that when implementing flexbox, you apply attributes to *both* the parent and the target children elements you want to style:


## Parent Examples:
```css
	
	.parent{
		display: flex; /* or inline-flex */
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: stretch;
	}

	#vertical{
		flex-direction: column;
		align-items: center;
	}


```


<style type="text/css">
	.parent{
		display: flex; /* or inline-flex */
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: stretch;
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	#vertical{
		flex-direction: column;
		align-items: center;
	}

	.child{
		padding: 1rem;
		background-color: green;
		color: white;
	}

	.child:nth-of-type(even){
		background-color: red;
	}

</style>
<div class="parent">
	<div class="child">First Section<br>Second line</div>
	<div class="child">Second Section</div>
	<div class="child">Third Section<br>Second line<br>Third line</div>
	<div class="child">Fourth Section</div>
</div>

With `#vertical`:
<div class="parent" id="vertical">
	<div class="child">First Section</div>
	<div class="child">Second Section</div>
	<div class="child">Third Section</div>
	<div class="child">Fourth Section</div>
</div>

<br>

## Definitions:
Flexbox organizes items along two axes (x and y). The primary axis is defined with `flex-direction`. (if `row` is selected, `x` is primary, if `column` is selected, `y` becomes the primary axis).

### flex-direction
`flex-direction` determines whether child elements are displayed vertically or horizontally (and in which order): `row`, `row-reverse`, `column`,  `column-reverse`

### flex-wrap
`flex-wrap` determines whether all items should be displayed in a single row/column

### justify-content
`justify-content` applies styles via the primary axis. Options include: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

### align-items
`align-items` applies layout styles via the secondary axis: `flex-start`, `flex-end`, `center`, `stretch`, `baseline`

In case you select `wrap` for `flex-wrap`, you can also use `align-content` to style multiple lines: `flex-start`, `flex-end`, `center`, `stretch`, `space-between`, `space-around`:

```css

	.parent{
		flex-wrap: wrap;
		align-content: flex-end;
	}

	.parent .child{
		width: 25%;
	}

```

<style type="text/css">
	#wrapping{
		flex-wrap: wrap;
		align-content: flex-end;
		height: 15rem;
		background-color: lightgray;
	}

	#wrapping .child{
		width: 25%;
	}
</style>

<div class="parent" id="wrapping">
	<div class="child">First Section<br>Second line</div>
	<div class="child">Second Section</div>
	<div class="child">Third Section<br>Second line<br>Third line</div>
	<div class="child">Fourth Section</div>
</div>

### Child Examples:

### order
Applying `order` to a child element forces it to a new position: 
```css

.child:first-of-type{
	order: 10;
	background-color: blue;
}

```
<style type="text/css">
	#first_child{
		order: 10;	
		background-color: blue;	
	}
</style>

<div class="parent">
	<div class="child" id="first_child">First Section<br>Second line</div>
	<div class="child">Second Section</div>
	<div class="child">Third Section<br>Second line<br>Third line</div>
	<div class="child">Fourth Section</div>
</div>

### flex-grow
Allows an element to grow proportionally in relation to its sibling elements (takes an integer).
```css

#bigger{
	flex-grow: 2;
}

```
<style type="text/css">
#bigger{
	flex-grow: 2;
}
</style>

<div class="parent">
	<div class="child">First Section<br>Second line</div>
	<div class="child" id="bigger">Second Section</div>
	<div class="child">Third Section<br>Second line<br>Third line</div>
	<div class="child">Fourth Section</div>
</div>

### flex-basis
defines the default size of an element (takes a unit value, similar to `width`):
```css

#isolated{
	flex-basis: 30%;
}

```
<style type="text/css">
#isolated{
	flex-basis: 30%;
}
</style>

<div class="parent">
	<div class="child">First Section<br>Second line</div>
	<div class="child" id="isolated">Second Section</div>
	<div class="child">Third Section<br>Second line<br>Third line</div>
	<div class="child">Fourth Section</div>
</div>

### align-self
overrides the default alignment:
```css

#override{
	align-self: flex-end;
}

```
<style type="text/css">
#override{
	align-self: flex-end;
}
</style>

<div class="parent">
	<div class="child">First Section<br>Second line</div>
	<div class="child" id="override">Second Section</div>
	<div class="child">Third Section<br>Second line<br>Third line</div>
	<div class="child">Fourth Section</div>
</div>
<br>

## Resources
- [Mozilla&rsquo;s flexbox documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [CSS-tricks: Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


